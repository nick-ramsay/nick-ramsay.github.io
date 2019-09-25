//The core Firebase JS SDK is always required and must be listed first -->


//TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyClrkyeY_39Wcwsw_8o6zXclQ11tDFa4LM",
    authDomain: "portfolio-7546b.firebaseapp.com",
    databaseURL: "https://portfolio-7546b.firebaseio.com",
    projectId: "portfolio-7546b",
    storageBucket: "portfolio-7546b.appspot.com",
    messagingSenderId: "383117369072",
    appId: "1:383117369072:web:59ea25e398857300162c35"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var senderName;
var senderEmail;
var senderMessage;

var submitBtnDiv = document.getElementById("submit");

submitBtnDiv.addEventListener("click", submitMessage);

function submitMessage() {
    senderName = document.getElementById("senderName").value;
    senderEmail = document.getElementById("senderEmail").value;
    senderMessage = document.getElementById("senderMessage").value;
    
    database.ref().push({
        createdDate: firebase.database.ServerValue.TIMESTAMP,
        senderName: senderName,
        senderEmail: senderEmail,
        senderMessage: senderMessage
    })
}


