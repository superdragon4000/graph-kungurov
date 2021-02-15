function tableCreate() {
	let col = document.getElementById(column);
	let row = document.getElementById(rows);
	let button = document.getElementById("inputButton");
	button.addEventListener("click", function() {
		let body = document.getElementsByTagName('body')[0];
		let tbl = document.createElement('table');
		tbl.setAttribute('border', '1');
		let tbdy = document.createElement('tbody');
		for (let i = 0; i < rows; i++) {
			let tr = document.createElement('tr');
			for (let j = 0; j < column; j++) {
				let td = document.createElement('td');
				td.appendChild(document.createTextNode('\u0020'))
				i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
				tr.appendChild(td)
			}
			tbdy.appendChild(tr);
		}
		tbl.appendChild(tbdy);
		body.appendChild(tbl)
	});
  
}


window.onload = function() {
	tableCreate();
}