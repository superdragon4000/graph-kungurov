function main() {
	let create_table_button = document.getElementById("create_button");
	create_table_button.addEventListener("click", () => {
		let form = document.getElementById("form");
		form.append(createTable());
		return form;
}, false);

let clear_table_button = document.getElementById("clear_button");
clear_table_button.addEventListener("click", () => {
		let tables = document.getElementsByClassName("table");
		if (tables.length != 0) {
			tables[tables.length-1].remove();
		}
		return tables;
	}, false);
}

window.onload = function() {
	document.getElementById("defaultOpen").click();
	main();
}