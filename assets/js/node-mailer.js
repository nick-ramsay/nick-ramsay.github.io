$("#submit").on("click",sendMail);

function sendMail() {
    console.log($("#email").val());
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'youremail@gmail.com',
            pass: 'yourpassword'
        }
    });

    var mailOptions = {
        from: $("#email").val(),
        to: 'NickRamsay1989@gmail.com',
        subject: $("#subject").val(),
        text: $("#message").val()
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}