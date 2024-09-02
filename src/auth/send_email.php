<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require '/serviserc/vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__ , 'ecrytp.env');
$dotenv->load();

$mail = new PHPMailer(true);
$response = [
    'success' => false,
    'message' => ''
];
try {
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
    $nombre = trim($_POST['nom']) ? trim($_POST['nom']) : '';
    $telefono = trim($_POST['tel']) ? trim($_POST['tel']) : '';
    $email = trim($_POST['email']) ? trim($_POST['email']):'';
    $asunto = trim($_POST['asunto']);
    $mensaje = trim($_POST['mensaje']);

    if (empty($nombre) || empty($telefono) || empty($email) || empty($asunto) || empty($mensaje)) {
        echo 'Todos los campos son requeridos.';
        exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'El correo electrónico no es válido.';
        exit;
    }

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = htmlspecialchars($asunto);
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
            <h1>Detalles de la Solicitud</h1>
            <p><strong>Nombre:</strong> ' . htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8') . '</p>
            <p><strong>Teléfono:</strong> ' . htmlspecialchars($telefono, ENT_QUOTES, 'UTF-8') . '</p>
            <p><strong>Correo Electrónico:</strong> ' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '</p>
            <p><strong>Asunto:</strong> ' . htmlspecialchars($asunto, ENT_QUOTES, 'UTF-8') . '</p>
            <p><strong>Mensaje:</strong></p>
            <p>' . nl2br(htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8')) . '</p>
            <div class="footer">
                Este es un correo automatizado. Por favor, no responda a este mensaje.
            </div>
        </div>
    </body>
    </html>
    ';
    $mail->AltBody = '
    Detalles de la Solicitud
    Nombre: ' . htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8') . '
    Teléfono: ' . htmlspecialchars($telefono, ENT_QUOTES, 'UTF-8') . '
    Correo Electrónico: ' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '
    Asunto: ' . htmlspecialchars($asunto, ENT_QUOTES, 'UTF-8') . '
    Mensaje:
    ' . htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8') . '

    Este es un correo automatizado. Por favor, no responda a este mensaje.
    ';
    $mail->send();
    $response['success'] = true;
    $response['message'] = 'Su mensaje ha sido enviado. Muchas gracias.';
} catch (Exception $e) {
    $response['message'] = "No se pudo enviar el mensaje. Error de Mailer: {$mail->ErrorInfo}";
}
    echo json_encode($response);