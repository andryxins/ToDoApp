import toDoListItem from '../tamplates/todoListItem.hbs';

const refs = {
  toDosList: document.querySelector('.js-todo-list'),
};

const renderingActions = {
  createListMarkUp(arrOfToDos) {
    return [...arrOfToDos]
      .reverse()
      .map(item => toDoListItem(item))
      .join('');
  },
  updatingToDoList(arrOfToDos) {
    const markUp = this.createListMarkUp(arrOfToDos);
    refs.toDosList.innerHTML = '';
    refs.toDosList.insertAdjacentHTML('beforeend', markUp);
  },
};

export { renderingActions };
