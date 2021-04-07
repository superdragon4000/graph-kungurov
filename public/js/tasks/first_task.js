function isAdjacency() {

}

function firstTask() {
  const rows = document.getElementById('rows');
  const columns = document.getElementById('columns');

  const tab = document.getElementById('first');
  tab.querySelector('form');

  const buttonCreate = document.getElementById('create_button__first');
  const listenerCreate = function () {
    tab.append(createMatrix('first_matrix', rows.value, columns.value));
    buttonCreate.removeEventListener('click', listenerCreate, false);
  };
  buttonCreate.addEventListener('click', listenerCreate, false);

  const buttonCheck = document.getElementById('check_button__first');
  const listenerCheck = function () {
    isAdjacency();
    buttonCheck.removeEventListener('click', listenerCheck, false);
  };
  buttonCheck.addEventListener('click', listenerCheck, false);

  const buttonDelete = document.getElementById('delete_button__first');
  const listenerDelete = function () {
    const matrix = document.getElementById('first_matrix');
    matrix.remove();
    buttonDelete.removeEventListener('click', listenerDelete, false);
  };
  buttonDelete.addEventListener('click', listenerDelete, false);
}
