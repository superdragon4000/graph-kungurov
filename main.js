const INPUT_TYPE = "input";
const TEXT_TYPE = "value";

function createTable() {

}

function createTableRow() {

}

function createTableElem() {
	
}

function createInput() {
	let input = document.createElement("input");
	input.type = "number";
	input.value = 0;
	return input;
}

/**
 * Функция создания содержимого типа <span> для ячейки таблицы
 * 
 * @param {String} value - значение текстового поля
 */
function createElement(value) {
	let result = document.createElement("span");
	result.value = value;
	result.innerHTML = value;
	return result;
}

function User(name) {
	this.name = name;
	this.isAdmin = false;
}

let user = new User("vasya");

window.onload = function() {
	document.getElementById("defaultOpen").click();
}