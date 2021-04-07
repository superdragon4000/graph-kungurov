// function readMatrix(id) {
//   const matrix = document.getElementById('id');
// }

function createElement(value) {
  const result = document.createElement('span');
  result.value = value;
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
