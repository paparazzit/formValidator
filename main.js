
/*THE USE OF formValidator*/
/*
let yourForm = new formValidator('formId'['first-input-name','second-input-name',... ], passwordCheck= true or false )
let submitBtn = ......
submitBtn.addEventListener('listener', yourFunction )
function your function(e){
e.preventDefault();
yourForm.checkForm();
if (Object.keys(yourForm.formData).length > 0) {
     do something with yourForm.formData (obj with form input values)
  }
}
*/
/*-----------FORME-----------*/

let form1 = new FormValidator(
	"registerForm",
	["name", "email", "password", "confirmPassword"],
	true
);
let registerBtn = document.querySelector("#register");
registerBtn.addEventListener("click", register);
function register(e) {
	e.preventDefault();
	form1.checkForm();
	if (Object.keys(form1.formData).length > 0) {
		displayFormData("#displayRegister", form1.formData);
	}
}


let form2 = new FormValidator("loginForm", ["email", "password"], false);
let loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", login);
function login(e) {
	e.preventDefault();
	form2.checkForm();
	if (Object.keys(form2.formData).length > 0) {
		displayFormData("#displayLogin", form2.formData);
	}
}

// FORM3

let form3 = new FormValidator(
	"register2",
	["name", "email", "password", "confirmPassword"],
	true
);

let register2Btn = document.querySelector("#registerBtn");
register2Btn.addEventListener("click", register2);

function register2(e) {
	e.preventDefault();
	form3.checkForm();
	if (Object.keys(form3.formData).length > 0) {
		displayFormData("#displayForm3", form3.formData);
	}
}

// DISPLAY FORM DATA

function displayFormData(form, data) {
	let displayView = document.querySelector(`${form}`);
	displayView.innerHTML = "";

	for (key in data) {
		let element = document.createElement("div");
		element.innerText = `${key} : ${data[key]}`;
		displayView.appendChild(element);
	}
}
