const slider = document.querySelector("#font-size-control");

const sliderText = document.querySelector("#text");

slider.addEventListener("input", changeFontSize);

function changeFontSize(event) {
	sliderText.style.fontSize = event.currentTarget.value + "px";
	console.log(Number(slider.value));
}

window.onload = function () {
	sliderText.style.fontSize = slider.value + "px";
};
