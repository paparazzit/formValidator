/*----------------- FORM VALIDATOR: ------------------*/
/*This is a simple form validator that checks your forms for correct input (not empty, displays error messages, and checks if password is equal to confirm password input value. It's best to use it with bootstrap 5 but you can style it yourself).
 */
/*
HTML INSTRUCTION
<form action="#" id="registerForm" class="form">
    <div class="form-group mb-3">       EACH input MUST be wrapped in a form-group div
    <label for="name">Name</label>
    <input type="text" name="name" class="form-control" />
    </div>
    <button class="btn btn-primary" id="register">Register</button>
</form>
*/

/* FormValidator takes 3 arrg: form id (formName), array of input names ['name','password', 'id'] that you wish to validate, and a BOOL (true / false) for password check*/

function FormValidator(formName, inputs, checkPassword) {
	this.form = document.querySelector(`#${formName}`); //dynamic form selektor
	this.formErrors = {};
	this.registerCheck = checkPassword; //check for checkPass bool

	for (let i = 0; i < inputs.length; i++) {
		this[inputs[i]] = inputs[i];
		//selects inputs from the specific form
		this[inputs[i]] = this.form.querySelector(`input[name="${inputs[i]}"]`);
		this.inputContainer = this[inputs[i]].parentElement;
		//creating ERROR divs and appending them to parent container of the input div (form-group div)
		this[inputs[i] + "Error"] = document.createElement("div");
		this[inputs[i] + "Error"].className = `${inputs[i]}Error`;
		this.inputContainer.append(this[inputs[i] + "Error"]);
	}

	//Cheking if there are no errors in error Obj. if there are no errors put input values in formData Obj.
	this.sendFromData = function () {
		if (Object.keys(this.formErrors).length < 1) {
			for (let i = 0; i < inputs.length; i++) {
				this.formData[inputs[i]] = this[inputs[i] + "Value"];
			}
		}
	};

	//CHECK each input values for errors ( if empty)
	this.checkForErrors = function () {
		for (let i = 0; i < inputs.length; i++) {
			this[inputs[i] + "Value"] = this[inputs[i]].value;
			if (this[inputs[i] + "Value"] === "") {
				//if input.value is empty add class error to input div (for style)
				//and populate formErrors obj.
				this[inputs[i]].classList.add("error");
				this.formErrors[inputs[i] + "Error"] = `${inputs[i]} Error`;
				this[inputs[i] + "Error"].innerText = `${inputs[
					i
				].toUpperCase()} is required`;
			} else {
				this[inputs[i]].classList.remove("error");
				delete this.formErrors[inputs[i] + "Error"];
				this[inputs[i] + "Error"].innerText = "";
			}
		}
	};
	// CHECKING THE FORM
	this.checkForm = function () {
		this.formData = {};
		//If password check is required (passed)
		if (this.registerCheck) {
			this.checkForErrors();
			//checking the password and confirm password for matching values
			if (this.password.value && this.confirmPassword.value) {
				if (this.password.value === this.confirmPassword.value) {
					this.sendFromData();
					this.removePassErrors();
				} else {
					this.passErrors();
				}
			} else {
				this.passErrors();
			}
		} else {
			this.checkForErrors();
			this.sendFromData();
		}
	};
	this.passErrors = function () {
		this.password.classList.add("error");
		this.confirmPassword.classList.add("error");
	};
	this.removePassErrors = function () {
		this.password.classList.remove("error");
		this.confirmPassword.classList.remove("error");
	};
}
