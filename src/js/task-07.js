const slider = document.querySelector("#font-size-control");
const sliderText = document.querySelector("#text");

slider.addEventListener("change", changeFontSize);

function changeFontSize(event) {
	sliderText.style.fontSize = event.currentTarget.value + "px";
	console.log(slider.value + "px");
}
