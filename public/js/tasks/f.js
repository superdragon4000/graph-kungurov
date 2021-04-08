function ribsToAdj(id) {
  const matrix = getCellValues(id);

  return output;
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
    tab.append(createElement(outputId, ribsToAdj(id)));
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