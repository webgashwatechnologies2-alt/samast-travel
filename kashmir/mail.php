<?php

if (isset($_POST['submit'])) {

    $name        = $_POST['name'];
    $phone       = $_POST['phone'];
    $email       = $_POST['email'];
    $city        = $_POST['city'];
    $traveller = $_POST['traveller'];

    $to = "info@samasttravel.com";
    $subject = "New Kashmir Tour Enquiry From " .$name;

    $message = "
    <html>
    <body style='font-family: Arial, sans-serif; font-size:14px; color:#000;'>
        <h3>New Kashmir Tour Enquiry</h3>
        <p>
            <b>Name:</b> $name <br>
            <b>Email:</b> $email <br>
            <b>Phone:</b> $phone <br>
            <b>City:</b> $city <br>
            <b>No. Of Traveller:</b> $traveller
        </p>
    </body>
    </html>
    ";

    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: info@samasttravel.com" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: thanks.html");
        exit;
    } else {
        echo "Mail sending failed.";
    }
}
?>
