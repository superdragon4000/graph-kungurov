function adjToRibs(id) {
  const matrix = getCellValues(id);
  let output = [];
  for (let i = 0; i < matrix.length; i += 1) {
    output.push([]);
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (+matrix[i][j] === 1) {
        output[i].push(i + 1, j + 1);
      }
    }
  }
  console.log(output);
  return output;
}

function e() {
  const rows = document.getElementById('rows_e');
  const columns = document.getElementById('columns_e');

  const tab = document.getElementById('e__tab');
  const id = 'e_matrix';
  tab.querySelector('form');

  const buttonCreate = document.getElementById('create_button__e');
  const buttonCheck = document.getElementById('check_button__e');
  const buttonDelete = document.getElementById('delete_button__e');
  const outputId = 'ribs';

  const listenerCheck = function () {
    tab.append(createElement(outputId, adjToRibs(id)));
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
