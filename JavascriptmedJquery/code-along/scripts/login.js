let config = {
    apiKey: "AIzaSyComNsWjA4XYKSL_3TSTMz6T_xqSgcyiUU",
    authDomain: "example-461d0.firebaseapp.com",
    databaseURL: "https://example-461d0.firebaseio.com",
    projectId: "example-461d0",
    storageBucket: "example-461d0.appspot.com",
    messagingSenderId: "794950612637"
};
firebase.initializeApp(config);

let provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    // ...
}).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
});