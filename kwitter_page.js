//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyC1os6NU4wj0vwK_M7bWqCAswoPIUqcg_c",
      authDomain: "kwitter-b989a.firebaseapp.com",
      databaseURL: "https://kwitter-b989a-default-rtdb.firebaseio.com",
      projectId: "kwitter-b989a",
      storageBucket: "kwitter-b989a.appspot.com",
      messagingSenderId: "480024657256",
      appId: "1:480024657256:web:3e95312b083f71bab2eadd"
    };      
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 user_name= localStorage.getItem("user_name");
 room_name= localStorage.getItem("room_name");

    function send(){
  msg= document.getElementById("message").value;
  firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
  })     
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }

getData();


function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}
