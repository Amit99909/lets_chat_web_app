function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
function send() {
    msg =document.getElementById("messages_inp").value;
      firebase.database().ref(room_name).push({
            username:user_name,
            mSg:msg,
            likes:0
      });
      document.getElementById("messages_inp").value="";
}

var firebaseConfig = {
    apiKey: "AIzaSyB7SBFCqFJQSOYS-2tUL-3tWFPXZSovRy0",
    authDomain: "kwitter-25801.firebaseapp.com",
    databaseURL: "https://kwitter-25801-default-rtdb.firebaseio.com",
    projectId: "kwitter-25801",
    storageBucket: "kwitter-25801.appspot.com",
    messagingSenderId: "1045604263086",
    appId: "1:1045604263086:web:9830e682511b157a5af93f"
  };
  firebase.initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
username=message_data["username"];
mSg=message_data["mSg"];
likes=message_data["likes"];
l1='<h4>'+username+'<img src="tick.png" class="un1"></h4>';
l2='<h4 class="user_msg">'+mSg+'</h4>';
l3='<button class="btn btn-warning" id="'+firebase_message_id+'" onclick="add_like(this.id)" value="'+likes+'"><span class="glyphicon glyphicon-thumbs-up">Likes:'+likes+' </span></button><hr>';
document.getElementById("messages_div").innerHTML+=l1+l2+l3;




//End code
});});}
getData();