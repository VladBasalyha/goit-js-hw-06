const input = document.querySelector("#validation-input");

input.addEventListener("input", checkLength);

function checkLength(event) {
	const inputText = event.currentTarget;
	const inputTextLength = Number(inputText.dataset.length);

	if (input.value.length === inputTextLength) {
		inputText.classList.remove("invalid");
		inputText.classList.add("valid");
	} else if (input.value.length !== inputTextLength) {
		inputText.classList.remove("valid");
		inputText.classList.add("invalid");
	}
	console.log(inputText.value);
}
