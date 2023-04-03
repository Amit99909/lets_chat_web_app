function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="index.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyDtzAKqFSTjfPSwJ9sH33mgtbITcW0-uuE",
    authDomain: "kwitter-project-b5290.firebaseapp.com",
    databaseURL: "https://kwitter-project-b5290-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-b5290",
    storageBucket: "kwitter-project-b5290.appspot.com",
    messagingSenderId: "1026475383479",
    appId: "1:1026475383479:web:3943a7b13b75c20aff4b32"
  };
  
  
  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   line='<div id="'+Room_names+'" class="roomName" onclick="openroom(this.id)">'+Room_names+'</div><hr>';
   document.getElementById("rooms").innerHTML += line;
   
   
   });});}


function openroom(roomname){
    localStorage.setItem("room_name",roomname);
    window.location="index3.html";
         
}