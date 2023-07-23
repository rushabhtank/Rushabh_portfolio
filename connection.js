const firebaseConfig = {
    apiKey: "AIzaSyCESTJUb1yHe_FbKDOg7o8CSslpNS81Xhc",
    authDomain: "myportfolio-6877e.firebaseapp.com",
    databaseURL: "https://myportfolio-6877e-default-rtdb.firebaseio.com",
    projectId: "myportfolio-6877e",
    storageBucket: "myportfolio-6877e.appspot.com",
    messagingSenderId: "697678066119",
    appId: "1:697678066119:web:02409ea392ed1b2fea29e2",
    measurementId: "G-CMPN2K6BQX"
  };

firebase.initializeApp(firebaseConfig);

//   reference database

var contactFormDB = firebase.database().ref("form");

document.getElementById("form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var num = getElementVal('number');

    console.log(name, email, num);

}

const getElementVal = (id) =>{
    return document.getElementById(id).value;
};