//your JS code here. If required.
var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (event) => {
	alert(
		`Frist Name: ${document.getElementById("fname").value}`+"\n"
		+`Last Name: ${document.getElementById("lname").value}`+"\n"
		+`Phone Number: ${document.getElementById("pnumber").value}`+"\n"
		+`Email ID: ${document.getElementById("email").value}`
	)
});

 'Frist Name: John\nLast Name: Doe\nPhone Number: 1234567890\nEmail ID: john.doe@example.com'
'First Name: John'