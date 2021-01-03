let login = "Admin";
let password = "TheMaster";
console.log("Begin");
console.log("Login = " + login);
switch (login) {
case "Cancel": {
	console.log(Canceled);
	break;
}
	;
case "Admin": {
	console.log("Password?");
	console.log("Password = " + "*******");
	switch (password) {
	case "Cancel": {
		console.log(Canceled);
		break;
	}
		;
	case "TheMaster": {
		console.log("Welcome");
		break;
	}
		;
	default: {
		console.log("Wrong password");
		break;
	}
		;

	}
	;
	break;
}
	;
default: {
	console.log("I don't know you");
	break;
}
	;
}
