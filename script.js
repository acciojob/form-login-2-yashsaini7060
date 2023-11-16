//your JS code here. If required.
var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (event) => {
	alert(
		 `Frist Name: ${document.getElementById("fname").value}\nLast Name: ${document.getElementById("lname").value}\nPhone Number: ${document.getElementById("pnumber").value}\nEmail: ${document.getElementById("email").value}`
	)
});