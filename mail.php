<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$formcontent=" From: $name \n Phone: $phone \n Message: $message";
$recipient = "matthew.reck@recksite.org";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Loading..." . " -" . "<a href='thanks.html' style='text-decoration:none;color:#ff0099;'> Click here if you aren't redirected.</a>";
header("Location: thanks.html");
?>
