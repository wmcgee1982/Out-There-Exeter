function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "outthereexe@gmail.com",
        Password : "ote2024!!",
        To : "outthereexe@gmail.com",
        From : "outthereexe@gmail.com",
        Subject : "New Website Contact Form Enquiry",
        Body : "Name: " +document.getElementById("contactFormName").value 
                + "<br> Email: " +document.getElementById("contactFormEmail").value 
                + "<br> Message: " +document.getElementById("contactFormMessage").value 
            }).then(
                message => alert("Message sent")
            );
}