// counting number of categories
const categories = document.querySelectorAll(".item");
console.log(`Categories: ${categories.length}`);

// consoling title and elements

categories.forEach((category) =>
	console.log(
		`Category: ${category.firstElementChild.innerText} 
Elements: ${category.lastElementChild.children.length}`
	)
);
