function ribsToAdj(id) {
  const matrix = getCellValues(id);
  let adj = [];
  let max = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] > max) {
        max = +matrix[i][j];
      }
    }
  }
  for (let z = 0; z < max; z += 1) {
    adj.push([]);
    for (let x = 0; x < max; x += 1) {
      adj[z][x] = 0;
    }
  }
  let i = 0;
  let j = 0;
  for (let h = 0; h < matrix.length; h += 1) {
    i = +matrix[h][0];
    j = +matrix[h][1];
    adj[i-1][j-1] = 1;
  }
  return createRibs('adjaced', max, max, adj);
}

function f() {
  const rows = document.getElementById('rows_f');

  const tab = document.getElementById('f__tab');
  const id = 'f_matrix';
  tab.querySelector('form');

  const buttonCreate = document.getElementById('create_button__f');
  const buttonCheck = document.getElementById('check_button__f');
  const buttonDelete = document.getElementById('delete_button__f');
  const outputId = 'ribs';

  const listenerCheck = function () {
    tab.append(ribsToAdj(id));
    buttonCheck.removeEventListener('click', listenerCheck, false);
  };

  const listenerCreate = function () {
    tab.append(createMatrix(id, rows.value, 2));
    buttonCheck.disabled = false;
    buttonDelete.disabled = false;
    buttonCreate.removeEventListener('click', listenerCreate, false);
    buttonDelete.addEventListener('click', listenerDelete, false);
    buttonCheck.addEventListener('click', listenerCheck, false);
  };
  buttonCreate.addEventListener('click', listenerCreate, false);

  buttonCheck.addEventListener('click', listenerCheck, false);

  const listenerDelete = function () {
    const matrix = document.getElementById(id);
    const output = document.getElementById(outputId);
    matrix.remove();
    output.remove();
    buttonCheck.disabled = true;
    buttonDelete.disabled = true;
    buttonDelete.removeEventListener('click', listenerDelete, false);
    buttonCreate.addEventListener('click', listenerCreate, false);
  };
  buttonDelete.addEventListener('click', listenerDelete, false);
}