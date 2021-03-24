function first_task() {
	create_matrix();
}

function create_matrix() {
  let create_table_button = document.getElementById("create_adj_button");
	create_table_button.addEventListener("click", () => {
		let form = document.getElementById("form");
		form.append(createTable("matrix_adj"));
    read_matrix();
		return form;
  }, false);
}

function read_matrix() {
  let matrix = document.getElementById("matrix_adj");
  let read_table_button = document.getElementById("check_adj_button");
  let rows = document.getElementById("rows").value;
  let columns = document.getElementById("columns").value;
  let output=[];
  if (read_table_button != undefined) {
    read_table_button.disabled = false;
    read_table_button.addEventListener("click", () => {
      let data = matrix.querySelectorAll("input");
      let k = 0;
      for (let i = 0; i < rows; i++) {
        output.push([]);
        for (let j = 0; j < columns; j++) {
          output[i].push = data[k].value;
          k++;

          // надо переделать
        }
      }
      console.log(output);
    }, false);
  }
}

function delete_matrix() {
  let delete_table_button = document.getElementById("delete_adj_button");
  delete_table_button.addEventListener("click", () => {
  		let tables = document.getElementsByClassName("table");
  		if (tables.length != 0) {
  			tables[tables.length-1].remove();
  		}
  		return tables;
  }, false);
}
