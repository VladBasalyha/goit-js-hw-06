const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
	const newItem = document.createElement("li");
	newItem.className = "class";
	newItem.textContent = ingredient;
	listOfIngredients.append(newItem);
	console.log(newItem);
});
