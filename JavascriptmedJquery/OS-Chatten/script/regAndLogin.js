$('#submitNewUser').on('click', regForm); // Connect to firebase register user

$('#chatLogin').on('submit', enterChat); // show user navigation
firebase.auth().onAuthStateChanged(function(user) { // Firebase check if online state has changed for user.
    if (user) {
        setTimeout(() => {
            window.location="chat.html";
        }, 500);
    }
});