<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $city = $_POST['city'];
    $package = $_POST['package'];

    require 'PHPMailer/PHPMailerAutoload.php';

    $mail = new PHPMailer;

    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = 'info@samasttravel.com';
    $mail->Password = 'Samast@@2026';

    $mail->setFrom('info@samasttravel.com', 'Samast Travels');
    $mail->addReplyTo($email, $name);

    // Primary recipient
    $mail->addAddress('info@samasttravel.com', 'Samast Travels');

    // Forwarding email
    // $mail->addCC('himalayatravelworld@gmail.com');

    $mail->Subject = ' Chardham Yatra Package - New Booking Enquiry from ' .$name;

    $body = "<html><body style='font-family: Arial, sans-serif;font-size:14px;line-height:18px;color:#000000'>";
    $body .= "<p><b>Booking Detail From  Chardham Yatra - Samast Travels</b></p>\r\n";
    $body .= "<p>Name: $name<br>Email: $email<br>Phone Number: $phone<br>City: $city<br>Package: $package</p>\r\n";
    $body .= "</body></html>";

    $mail->msgHTML($body);

    if (!$mail->send()) {
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        header('location:thanks.php');
    }
}

?>