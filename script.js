//your JS code here. If required.
var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (event) => {
	// alert("Frist Name: "+document.getElementById("fname").value+"\n"
	// 	+"Last Name: "+document.getElementById("lname").value+"\n"
	// 	+"Phone Number: "+document.getElementById("pnumber").value+"\n"
	// 	+"Email ID: "+document.getElementById("email").value)
		// var firstName = document.getElementById('fname').value;
  //       var lastName = document.getElementById('lname').value;
  //       var phoneNumber = document.getElementById('pnumber').value;
  //       var email = document.getElementById('email').value;

        alert("First Name: " + document.getElementById('fname').value + "\n" +
                      "Last Name: " + document.getElementById('lname').value + "\n" +
                      "Phone Number: " + document.getElementById('pnumber').value + "\n" +
                      "Email ID: " + document.getElementById('email').value);

        // alert(message);
});

