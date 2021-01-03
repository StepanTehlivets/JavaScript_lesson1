let login = "Admin";
let password = "TheMaster";
console.log("Begin");
console.log("Login = " + login);
if (login == "Cancel") {
	console.log(Canceled);
} else if (login == "Admin") {
	console.log("Password?")
	console.log("Password = " + "*******")
	if (password == "Cancel") {
		console.log(Canceled);
	} else if (password == "TheMaster") {
		console.log("Welcome");
	}else{
		console.log("Wrong password");
	}
}else{
	console.log("I don't know you");
}