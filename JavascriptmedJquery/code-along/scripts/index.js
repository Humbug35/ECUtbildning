let config = {
    apiKey: "AIzaSyComNsWjA4XYKSL_3TSTMz6T_xqSgcyiUU",
    authDomain: "example-461d0.firebaseapp.com",
    databaseURL: "https://example-461d0.firebaseio.com",
    projectId: "example-461d0",
    storageBucket: "example-461d0.appspot.com",
    messagingSenderId: "794950612637"
};
firebase.initializeApp(config);

let db = firebase.database();

let message = document.getElementById("message");
let button = document.getElementById("submit");
let output = document.getElementById("messageOutput");
let header = document.createElement("h2");
header.innerText = "Messages";
let child = document.createElement("p");

button.addEventListener('click', function() {
    let currentDate = new Date();
    let date = currentDate.toLocaleDateString();
    let time = currentDate.toLocaleTimeString();

    db.ref('/messages').push({
        message: message.value,
        timeStamp: `${date} ${time}`
    });
    let messages = db.ref('/messages');
    output.innerHTML = "";
    messages.on('value', function(snapshot) {
        for(let message of Object.values(snapshot.val())) {
            child.innerHTML += `
            <div>${message.message}</div>
            <div>${message.timeStamp}</div>
        `;
        }
        output.appendChild(header);
        output.appendChild(child);
    });
    message.value = "";
});
