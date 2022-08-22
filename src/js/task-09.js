function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// our queries
const body = document.body;
const btnChangeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

//
btnChangeColor.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
	const ourColor = getRandomHexColor();
	body.style.backgroundColor = `${ourColor}`;
	textColor.textContent = ourColor;
}
