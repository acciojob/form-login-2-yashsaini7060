//your JS code here. If required.
var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (event) => {
        alert("First Name: " + document.getElementById('fname').value + "\n" +
                      "Last Name: " + document.getElementById('lname').value + "\n" +
                      "Phone Number: " + document.getElementById('pnumber').value + "\n" +
                      "Email ID: " + document.getElementById('email').value);
});

