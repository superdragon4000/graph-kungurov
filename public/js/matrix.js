function getCellValues(id) {
  const table = document.getElementById(id);
  const output = [];
  for (let r = 0, n = table.rows.length; r < n; r += 1) {
    output.push([]);
    for (let c = 0, m = table.rows[r].cells.length; c < m; c += 1) {
      output[r].push(table.rows[r].cells[c].children[0].value);
    }
  }
  return output;
}

function createElement(id, value) {
  const result = document.createElement('span');
  result.value = value;
  result.setAttribute('id', id);
  result.innerHTML = value;
  return result;
}

function createInput() {
  const input = document.createElement('input');
  input.className = 'matrix_input';
  input.type = 'number';
  input.value = 0;
  return input;
}

function createMatrixElem() {
  const matrixElem = document.createElement('td');
  matrixElem.className = 'matrix_td';
  matrixElem.append(createInput());
  return matrixElem;
}

function createMatrixRow(columns) {
  const matrixRow = document.createElement('tr');
  for (let i = 0; i <= columns - 1; i += 1) {
    matrixRow.append(createMatrixElem());
  }
  return matrixRow;
}

function createMatrix(id, rows, columns) {
  const matrix = document.createElement('table');
  for (let i = 0; i <= rows - 1; i += 1) {
    matrix.append(createMatrixRow(columns));
  }
  matrix.className = 'matrix';
  matrix.setAttribute('id', id);
  return matrix;
}
