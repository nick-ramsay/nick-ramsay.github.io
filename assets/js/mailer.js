$("#submit").on("click", function () {
    sendEmail();
})

function sendEmail() {
    Email.send({
        SecureToken: "c2353b55-4fb0-4afa-adca-c7a70c52e8fc",
        To: "contact.nickramsay@gmail.com",
        From: $("#email").val(),
        Subject: $("#subject").val(),
        Body: $("#message").val()
    }).then(
        message =>
        console.log(message),
        $("#name").val(''),
        $("#email").val(''),
        $("#subject").val(''),
        $("#message").val('')
    );
}