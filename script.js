function showMessage(){

    let username = document.getElementById("username").value;

    if(username === ""){
        alert("Please enter your name");
        return;
    }

    let currentTime = new Date();

    document.getElementById("output").innerHTML =

        "<h2>Welcome " + username + "</h2>" +

        "<p>Your response has been submitted successfully.</p>" +

        "<p><b>Current Time:</b> " + currentTime.toLocaleString() + "</p>";
}