<?php
ob_start();
ini_set('display_errors', 0);
error_reporting(E_ALL);

header('Content-Type: application/json');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require __DIR__ . '/../../vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__, 'ecrytp.env');
$dotenv->load();

$mail = new PHPMailer(true);
$response = [
    'success' => false,
    'message' => ''
];


if (isset($_POST['g-recaptcha-response'])) {
    $recaptchaSecret = $_ENV['RECAPTCHA_SECRET_KEY'];
    $recaptchaResponse = $_POST['g-recaptcha-response'];
    $remoteAddr = $_SERVER['REMOTE_ADDR'];
    
    $recaptchaUrl = "https://www.google.com/recaptcha/api/siteverify";
    $recaptchaParams = [
        'secret' => $recaptchaSecret,
        'response' => $recaptchaResponse,
        'remoteip' => $remoteAddr
    ];

    $recaptchaResponse = file_get_contents($recaptchaUrl . '?' . http_build_query($recaptchaParams));
    $responseKeys = json_decode($recaptchaResponse, true);

    if (!$responseKeys['success']) {
        $response['message'] = 'Comprueba que no eres un robot.';
        echo json_encode($response);
        exit;
    }
}




//Configuracion PHPMailer
try {
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['CORREO_USER'];
    $mail->Password = $_ENV['CORREO_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom($_ENV['CORREO_USER'], 'CONSULTAS WEB');
    $recipients = explode(',', $_ENV['CORREO_RECIPIENT']);
    foreach ($recipients as $recipient) {
        $mail->addAddress(trim($recipient));
    }


    //Validacion y sanitizacion de campos
    $nombre = htmlspecialchars(trim($_POST['nom']), ENT_QUOTES, 'UTF-8');
    $telefono = htmlspecialchars(trim($_POST['tel']), ENT_QUOTES, 'UTF-8');
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $asunto = htmlspecialchars(trim($_POST['asunto']), ENT_QUOTES, 'UTF-8');
    $mensaje = htmlspecialchars(trim($_POST['mensaje']), ENT_QUOTES, 'UTF-8');

    if (empty($nombre) || empty($telefono) || empty($email) || empty($asunto) || empty($mensaje)) {
        $response['message'] = 'Todos los campos son requeridos.';
        echo json_encode($response);
        exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'El correo electrónico no es válido.';
        echo json_encode($response);
        exit;
    }

    //Contenido del mensaje
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = htmlspecialchars(trim($asunto), ENT_QUOTES, 'UTF-8');
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
                color: #007BFF;
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
                Este es un correo automatizado. Por favor, no responda a este mensaje.
            </div>
        </div>
    </body>
    </html>
    ';
    $mail->AltBody = '
    Detalles de la Consulta
    Nombre: ' . $nombre . '
    Teléfono: ' . $telefono . '
    Correo Electrónico: ' . $email . '
    Asunto: ' . $asunto . '
    Mensaje:
    ' . $mensaje . '

    Este es un correo automatizado. Por favor, no responda a este mensaje.
    ';
    $mail->send();
    $response['success'] = true;
    $response['message'] = 'Su mensaje ha sido enviado. Muchas gracias.';
} catch (Exception $e) {
    error_log("Error al enviar el correo: {$mail->ErrorInfo}");
    $response['message'] = 'No se pudo enviar el mensaje. Inténtelo de nuevo más tarde.';
}
ob_end_clean();
echo json_encode($response);
