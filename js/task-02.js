const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");
const elements = [];
ingredients.forEach((ingredient) => {
	const newItem = document.createElement("li");
	newItem.className = "class";
	newItem.textContent = ingredient;
	elements.push(newItem);
	console.log(newItem);
});

listOfIngredients.append(...elements);
