function adduser(){
    user_name=document.getElementById("un").value;
    localStorage.setItem("user_name",user_name);
    window.location="index2.html";
}
