<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit('Invalid Request');
}

/* Sanitize Input */
$name      = trim($_POST['name'] ?? '');
$email     = trim($_POST['email'] ?? '');
$phone     = trim($_POST['phone'] ?? '');
$city      = trim($_POST['city'] ?? '');
$traveller = trim($_POST['traveller'] ?? '');

/* Validation */
if (
    empty($name) ||
    empty($email) ||
    empty($phone) ||
    empty($city) ||
    empty($traveller)
) {

    file_put_contents(
        'invalid-enquiry-log.txt',
        date('Y-m-d H:i:s') . "\n" .
        print_r($_POST, true) . "\n-------------------\n",
        FILE_APPEND
    );

    exit('All fields are required.');
}

/* Email Validation */
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    exit('Please enter a valid email address.');
}

/* Load PHPMailer */
require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

/* SMTP Configuration */
$mail->isSMTP();
$mail->Host       = 'smtp.hostinger.com';
$mail->SMTPAuth   = true;
$mail->Username   = 'info@samasttravel.com';
$mail->Password   = 'Samast@@2026';
$mail->SMTPSecure = 'tls';
$mail->Port       = 587;

/* Sender */
$mail->setFrom('info@samasttravel.com', 'Samast Travels');

/* Reply To */
$mail->addReplyTo($email, $name);

/* Recipient */
$mail->addAddress('info@samasttravel.com', 'Samast Travels');

/* Email Format */
$mail->isHTML(true);

$mail->Subject = 'Uttarakhand Tours Package - New Booking Enquiry from ' . $name;

/* Email Body */
$body = '
<html>
<head>
    <title>New Enquiry</title>
</head>
<body style="font-family:Arial,sans-serif;font-size:14px;color:#333;">
    <h2>New Booking Enquiry</h2>

    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;">
        <tr>
            <td><strong>Name</strong></td>
            <td>' . htmlspecialchars($name) . '</td>
        </tr>
        <tr>
            <td><strong>Email</strong></td>
            <td>' . htmlspecialchars($email) . '</td>
        </tr>
        <tr>
            <td><strong>Phone</strong></td>
            <td>' . htmlspecialchars($phone) . '</td>
        </tr>
        <tr>
            <td><strong>City</strong></td>
            <td>' . htmlspecialchars($city) . '</td>
        </tr>
        <tr>
            <td><strong>No. of Travellers</strong></td>
            <td>' . htmlspecialchars($traveller) . '</td>
        </tr>
    </table>

</body>
</html>';

$mail->Body = $body;

/* Send Mail */
if (!$mail->send()) {

    file_put_contents(
        'mail-error-log.txt',
        date('Y-m-d H:i:s') .
        "\nError: " . $mail->ErrorInfo .
        "\nPOST Data:\n" . print_r($_POST, true) .
        "\n-------------------\n",
        FILE_APPEND
    );

    echo 'Mailer Error: ' . $mail->ErrorInfo;

} else {

    header('Location: thanks.html');
    exit();
}
?>