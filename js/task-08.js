const form = document.querySelector(".login-form");

form.addEventListener("submit", checkForm);

function checkForm(event) {
	event.preventDefault();
	const { email, password } = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return alert(
			"НУ ТУТ ПО УМОВІ КРЧ МАЄ ВИВОДИТИСЬ АЛЕРТ З ТИМ ЩОБ МИ ВСІ ПОЛЯ ЗАПОВНИЛИ"
		);
	}

	const userData = {
		login: email.value,
		password: password.value,
	};
	console.log(userData);
	event.currentTarget.reset();
}
