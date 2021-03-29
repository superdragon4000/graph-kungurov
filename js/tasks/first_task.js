function first_task() {
	const tab = document.getElementById("first");
	tab.querySelector("form");
	
	const button_create = document.getElementById("create_button__first");
	let listener_create = function () {
		tab.append(createMatrix("first_matrix"));
		button_create.removeEventListener("click", listener_create, false);
	}
	button_create.addEventListener("click", listener_create, false);

	const button_check = document.getElementById("check_button__first")
	let listener_check = function () {
		isAdjacency();
		button_check.removeEventListener("click", listener_check, false);
	}
	button_check.addEventListener("click", listener_check, false);

	const button_delete = document.getElementById("delete_button__first")
	const matrix = document.getElementById("first_matrix");
	let listener_delete = function () {
		matrix.remove();
		button_delete.removeEventListener("click", listener_delete, false);
	}
	if (matrix != null) {
		button_delete.addEventListener("click", listener_delete, false);
	}
}

function isAdjacency() {

}
