

function sendEmail() {
    var sname=document.getElementById('contactFormName').value;
    var semail=document.getElementById('contactFormEmail').value;
    var message=document.getElementById('contactFormMessage').value;
    var smsg='<html><strong>From :</strong>' + sname + '<br/><strong>Contact :</strong>' + semail +'<br/><strong>Message:</strong>' + message + '</html>';

    Email.send({
        Host: "smtp.gmail.com",
        Username:'outthereexe@gmail.com',
        Password:'ote2024!!',
        To : 'atashvana@gmail.com',
        From : "outthereexe@gmail.com",
        Subject : "New Website Contact Form Enquiry",
        Body : smsg
   }).then(
    message => alert("Message sent")
   );
}