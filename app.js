 function App() {
	let name = prompt("What is your name?");
	let email = prompt("What is your email address?");

	name.trim();
	email.trim();

	if(name.length > 0 && email.length > 0) {
	  alert(
      `Hi ${name}, we'll email you with all the necessary information @ ${email}. Enjoy your day 🌺.`
    );
	} else {
		alert("Please provide valid information.");
		
	}
 }

 let button = document.querySelector("#button");
 button.addEventListener("click", App);
