function readMatrix(id) {
	let matrix = document.getElementById("id");
}

function createMatrix(id) {
	let matrix = document.createElement("table");
	let rows = document.getElementById("rows").value;
	let columns = document.getElementById("columns").value;
	for (let i = 0; i <= rows - 1; i++) {
		matrix.append(createMatrixRow(columns));
	}
  matrix.className = "matrix";
	matrix.setAttribute("id", id)
	return matrix;
}

function createMatrixRow(columns) {
	let matrixRow = document.createElement("tr");
	for (let i = 0; i <= columns - 1; i++) {
		matrixRow.append(createMatrixElem())
	}
	return matrixRow;
}

function createMatrixElem() {
	let matrixElem = document.createElement("td");
  matrixElem.className = "matrix_td";
	matrixElem.append(createInput());
	return matrixElem;
}

function createInput() {
	let input = document.createElement("input");
  input.className = "matrix_input";
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
