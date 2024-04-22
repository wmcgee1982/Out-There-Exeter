<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name']
    $mailFrom = $_POST['email']
    $message = $_POST['message']

    $mailTo = "info@out-there-exeter.com"
    $headers = "From: ".$mailFrom;
    $txt = "You have receved an e-mail on the website, from ".$name.".\n\n".$message;


    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");
}