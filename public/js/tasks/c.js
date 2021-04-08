function countRibs(id) {
  const matrix = getCellValues(id);
  let output = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (j >= i) {
        if (+matrix[i][j] === 1) {
          output += 1;
        }
      }
    }
  }
  return output;
}

function c() {
  const rows = document.getElementById('rows_c');
  const columns = document.getElementById('columns_c');

  const tab = document.getElementById('c__tab');
  const id = 'c_matrix';
  tab.querySelector('form');

  const buttonCreate = document.getElementById('create_button__c');
  const buttonCheck = document.getElementById('check_button__c');
  const buttonDelete = document.getElementById('delete_button__c');
  const outputId = 'output';

  const listenerCheck = function () {
    tab.append(createElement(outputId, `Количество ребер: ${countRibs(id)}`));
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
