<?php

// Handle CORS preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    http_response_code(200); // Success
    exit;
}

// CORS for actual requests (POST)
header("Access-Control-Allow-Origin: *"); // Adjust this to allow only trusted domains
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json'); // JSON response

// Add logging for debugging
error_log('Request method: ' . $_SERVER['REQUEST_METHOD']);
error_log('POST data: ' . print_r($_POST, true));

// Composer autoloader
require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ✅ Read POST data safely
$contactType = $_POST['contact-type'] ?? '';
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Validate input fields
if (!$name || !$email || !$message) {
    // Invalid form data
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';             // Gmail SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'faisalosmannorthsouth@gmail.com';    // Your Gmail
    $mail->Password = 'xeuwjtyhhgpvzxbj';      // App Password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress('faisalosmannorthsouth@gmail.com');   // Your Gmail

    // Content
    $mail->isHTML(false);
    $mail->Subject = $contactType === 'quote' ? 'Quote Request' : 'New Contact Message';
    $mail->Body = "Name: $name\nEmail: $email\nType: $contactType\n\nMessage:\n$message";

    // Send email
    if ($mail->send()) {
        echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Mailer Error: Could not send the email']);
    }

} catch (Exception $e) {
    // Catch PHPMailer exceptions and send JSON error response
    echo json_encode(['success' => false, 'message' => "Mailer Error: {$mail->ErrorInfo}"]);
}

?>
