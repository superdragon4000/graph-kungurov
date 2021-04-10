function createRibsInput(value) {
  const input = document.createElement('input');
  input.className = 'matrix_input';
  input.type = 'number';
  input.value = value;
  return input;
}

function createRibsElem(value) {
  const matrixElem = document.createElement('td');
  matrixElem.className = 'matrix_td';
  matrixElem.append(createRibsInput(value));
  return matrixElem;
}

function createRibsRow(columns, value) {
  const matrixRow = document.createElement('tr');
  for (let i = 0; i <= columns - 1; i += 1) {
    matrixRow.append(createRibsElem(value[i]));
  }
  return matrixRow;
}

function createRibs(id, rows, columns, values) {
  const matrix = document.createElement('table');
  for (let i = 0; i <= rows - 1; i += 1) {
    matrix.append(createRibsRow(columns, values[i]));
  }
  matrix.className = 'matrix';
  matrix.setAttribute('id', id);
  return matrix;
}
