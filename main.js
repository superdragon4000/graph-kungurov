function main() {
	let table = document.getElementById("inputButton");
	table.addEventListener("click", () => {
		return document.getElementById("form").append(createTable());
	}, false);
}

window.onload = function() {
	document.getElementById("defaultOpen").click();
	main();
}