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

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var number = getInputVal('number');
  
    // Save message
    saveMessage(name, email, phone);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, number){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      number:number,
    });
  }