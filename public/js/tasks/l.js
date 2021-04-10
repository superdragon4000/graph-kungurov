function rate(id) {
  const matrix = getCellValues(id);
  let output = [];
  for (let h = 0; h < matrix.length; h += 1) {
    output[h] = 0;
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (+matrix[i][j] === 1) {
        output[i] += 1;
      }
    }
  }
  return output;
}

function l() {
  const rows = document.getElementById('rows_l');
  const columns = document.getElementById('columns_l');

  const tab = document.getElementById('l__tab');
  const id = 'l_matrix';
  tab.querySelector('form');

  const buttonCreate = document.getElementById('create_button__l');
  const buttonCheck = document.getElementById('check_button__l');
  const buttonDelete = document.getElementById('delete_button__l');
  const outputId = 'ribs';

  const listenerCheck = function () {
    tab.append(createElement(outputId, rate(id)));
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