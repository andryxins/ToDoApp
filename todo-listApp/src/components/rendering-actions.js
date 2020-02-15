import toDoListItem from '../tamplates/todoListItem.hbs';
import sortActions from './sort-actions';

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
  updatingToDoList() {
    const markUp = this.createListMarkUp(sortActions.sort());
    refs.toDosList.innerHTML = '';
    refs.toDosList.insertAdjacentHTML('beforeend', markUp);
  },
};

export { renderingActions };
