<?php

if (isset($_POST['contact_submit'])) {

    // Get form data safely
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $city = trim($_POST['city'] ?? '');
    $destination = trim($_POST['destination'] ?? '');

    require 'PHPMailer/PHPMailerAutoload.php';

    $mail = new PHPMailer();

    // SMTP Settings
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@samasttravel.com';
    $mail->Password = 'Samast@@2026';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Sender & Receiver
    $mail->setFrom('info@samasttravel.com', 'Samast Travel');
    $mail->addAddress('info@samasttravel.com', 'Samast Travel');

    // User reply email
    if (!empty($email)) {
        $mail->addReplyTo($email, $name);
    }

    // Mail format
    $mail->isHTML(true);
    $mail->Subject = 'New Website Enquiry - Samast Travel';

    // Email Body
    $mail->Body = "
    <html>
    <body style='font-family: Arial, sans-serif; line-height: 1.8;'>
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Mobile Number:</strong> {$phone}</p>
        <p><strong>City:</strong> {$city}</p>
        <p><strong>No. of Travellers:</strong> {$destination}</p>
    </body>
    </html>
    ";

    // Send mail
    if ($mail->send()) {
        header("Location: thanks.html");
        exit();
    } else {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }

} else {
    echo "Invalid Request";
}
?>