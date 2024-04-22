 <?php

if (isset($_POST['SSUUBBMMIITT'])) {
    $name = $_POST['namename']
    $mailFrom = $_POST['emailemail']
    $message = $_POST['messagemessage']

    $mailTo = "info@out-there-exeter.com"
    $headers = "From: ".$mailFrom;
    $txt = "You have receved an e-mail on the website, from ".$name.".\n\n".$message;


    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");
} 