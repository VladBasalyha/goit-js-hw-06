// declare variables for increment and decrement objects

const incrBtn = document.querySelector('button[data-action = "increment"]');

const decrBtn = document.querySelector('button[data-action = "decrement"]');

const value = document.querySelector("#value");

// variables for counting
let counterValue = 0;
value.innerHTML = counterValue;

// callbacks for increment and decrement
const incrementClicking = () => {
	counterValue += 1;
	value.innerHTML = counterValue;
	console.log(counterValue);
};

const decrementClicking = () => {
	counterValue -= 1;
	value.innerHTML = counterValue;
	console.log(counterValue);
};

// event listeners
incrBtn.addEventListener("click", incrementClicking);
decrBtn.addEventListener("click", decrementClicking);
