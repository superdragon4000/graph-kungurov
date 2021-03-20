// const INPUT_TYPE = "input";
// const TEXT_TYPE = "value";

function createTable() {
	let table = document.createElement("table");
	let rows = document.getElementById("rows").value;
	let columns = document.getElementById("columns").value;
	for (let i = 0; i <= rows - 1; i++) {
		table.append(createTableRow(columns));
	}
  table.className = "table";
	return table;
}

function createTableRow(columns) {
	let tableRow = document.createElement("tr");
	for (let i = 0; i <= columns - 1; i++) {
		tableRow.append(createTableElem())
	}
	return tableRow;
}

function createTableElem() {
	let tableElem = document.createElement("td");
  tableElem.className = "table_td";
	tableElem.append(createInput());
	return tableElem;
}

function createInput() {
	let input = document.createElement("input");
  input.className = "table_input";
	input.type = "number";
	input.value = 0;
	return input;
}

function createElement(value) {
	let result = document.createElement("span");
	result.value = value;
	result.innerHTML = value;
	return result;
}
