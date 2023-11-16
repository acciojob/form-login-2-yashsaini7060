//your JS code here. If required.
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        var firstName = document.getElementById('fname').value;
        var lastName = document.getElementById('lname').value;
        var phoneNumber = document.getElementById('pnumber').value;
        var email = document.getElementById('email').value;

        var message = "First Name: " + firstName + "\n" +
                      "Last Name: " + lastName + "\n" +
                      "Phone Number: " + phoneNumber + "\n" +
                      "Email ID: " + email;

        alert(message);
    });