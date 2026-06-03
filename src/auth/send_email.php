<?php
ob_start();
ini_set('display_errors', 0);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=UTF-8');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require __DIR__ . '/../../vendor/autoload.php';

$response = [
    'success' => false,
    'message' => ''
];

function jsonResponse(array $response): void
{
    ob_end_clean();
    echo json_encode($response);
    exit;
}

try {
    $dotenv = Dotenv::createImmutable(__DIR__, 'ecrytp.env');
    $dotenv->load();

    $requiredEnv = ['RECAPTCHA_SECRET_KEY', 'CORREO_USER', 'CORREO_PASS', 'CORREO_RECIPIENT'];

    foreach ($requiredEnv as $envKey) {
        if (empty($_ENV[$envKey])) {
            error_log("Variable de entorno faltante: {$envKey}");
            $response['message'] = 'Configuración del servidor incompleta.';
            jsonResponse($response);
        }
    }

    if (empty($_POST['g-recaptcha-response'])) {
        $response['message'] = 'Comprueba que no eres un robot.';
        jsonResponse($response);
    }

    $recaptchaParams = [
        'secret' => $_ENV['RECAPTCHA_SECRET_KEY'],
        'response' => $_POST['g-recaptcha-response'],
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? ''
    ];

    $recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptchaResult = file_get_contents($recaptchaUrl . '?' . http_build_query($recaptchaParams));
    $responseKeys = json_decode($recaptchaResult, true);

    if (empty($responseKeys['success'])) {
        $response['message'] = 'Comprueba que no eres un robot.';
        jsonResponse($response);
    }

    $nombre = htmlspecialchars(trim($_POST['nom'] ?? ''), ENT_QUOTES, 'UTF-8');
    $telefono = htmlspecialchars(trim($_POST['tel'] ?? ''), ENT_QUOTES, 'UTF-8');
    $emailRaw = trim($_POST['email'] ?? '');
    $email = filter_var($emailRaw, FILTER_SANITIZE_EMAIL);
    $asunto = htmlspecialchars(trim($_POST['asunto'] ?? ''), ENT_QUOTES, 'UTF-8');
    $mensaje = htmlspecialchars(trim($_POST['mensaje'] ?? ''), ENT_QUOTES, 'UTF-8');

    if (empty($nombre) || empty($telefono) || empty($email) || empty($asunto) || empty($mensaje)) {
        $response['message'] = 'Todos los campos son requeridos.';
        jsonResponse($response);
    }

    if (!preg_match('/^[0-9]{7,15}$/', $telefono)) {
        $response['message'] = 'El teléfono no es válido.';
        jsonResponse($response);
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'El correo electrónico no es válido.';
        jsonResponse($response);
    }

    if (mb_strlen($nombre) > 80 || mb_strlen($asunto) > 120 || mb_strlen($mensaje) > 300) {
        $response['message'] = 'Uno o más campos superan el límite permitido.';
        jsonResponse($response);
    }

    $mail = new PHPMailer(true);
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['CORREO_USER'];
    $mail->Password = $_ENV['CORREO_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($_ENV['CORREO_USER'], 'CONSULTAS WEB');
    $mail->addReplyTo($email, $nombre);

    $recipients = explode(',', $_ENV['CORREO_RECIPIENT']);
    foreach ($recipients as $recipient) {
        $recipient = trim($recipient);
        if (!empty($recipient) && filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
            $mail->addAddress($recipient);
        }
    }

    if (count($mail->getToAddresses()) === 0) {
        error_log('No hay destinatarios válidos configurados.');
        $response['message'] = 'Configuración del servidor incompleta.';
        jsonResponse($response);
    }

    $mail->isHTML(true);
    $mail->Subject = $asunto;
    $mail->Body = '
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                color: #333;
                margin: 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background-color: #f9f9f9;
            }
            h1 {
                color: #dc2626;
            }
            p {
                font-size: 16px;
                line-height: 1.5;
            }
            .footer {
                font-size: 12px;
                color: #888;
                text-align: center;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Detalles de la Consulta</h1>
            <p><strong>Nombre:</strong> ' . $nombre . '</p>
            <p><strong>Teléfono:</strong> ' . $telefono . '</p>
            <p><strong>Correo Electrónico:</strong> ' . $email . '</p>
            <p><strong>Asunto:</strong> ' . $asunto . '</p>
            <p><strong>Mensaje:</strong></p>
            <p>' . nl2br($mensaje) . '</p>
            <div class="footer">
                Este es un correo automatizado. Puede responder este correo para contactar al remitente.
            </div>
        </div>
    </body>
    </html>
    ';

    $mail->AltBody = "Detalles de la Consulta\nNombre: {$nombre}\nTeléfono: {$telefono}\nCorreo Electrónico: {$email}\nAsunto: {$asunto}\nMensaje:\n{$mensaje}";

    $mail->send();

    $response['success'] = true;
    $response['message'] = 'Su mensaje ha sido enviado. Muchas gracias.';
    jsonResponse($response);
} catch (Exception $e) {
    error_log("Error al enviar el correo: {$e->getMessage()}");
    $response['message'] = 'No se pudo enviar el mensaje. Inténtelo de nuevo más tarde.';
    jsonResponse($response);
} catch (Throwable $e) {
    error_log("Error inesperado: {$e->getMessage()}");
    $response['message'] = 'No se pudo procesar la solicitud.';
    jsonResponse($response);
}
