function isAdjacency(id) {
  const matrix = getCellValues(id);
  let output = true;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (+matrix[i][j] !== +matrix[j][i]) {
        output = false;
      }
      if (+matrix[i][i] !== 0) {
        output = false;
      }
    }
  }
  return output;
}

function firstTask() {
  const rows = document.getElementById('rows');
  const columns = document.getElementById('columns');

  const tab = document.getElementById('a__tab');
  const id = 'a_matrix';
  tab.querySelector('form');

  const buttonCreate = document.getElementById('create_button__first');
  const buttonCheck = document.getElementById('check_button__first');
  const buttonDelete = document.getElementById('delete_button__first');
  const outputId = 'output';

  const listenerCheck = function () {
    tab.append(createElement(outputId, isAdjacency(id)));
    buttonCheck.removeEventListener('click', listenerCheck, false);
  };

  const listenerCreate = function () {
    tab.append(createMatrix(id, rows.value, columns.value));
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
