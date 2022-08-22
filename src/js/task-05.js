const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

const inputChange = (event) => {
	outputText.textContent = event.currentTarget.value;

	if (event.currentTarget.value === "") {
		outputText.textContent = "Anonymous";
	}
};

inputText.addEventListener("input", inputChange);
