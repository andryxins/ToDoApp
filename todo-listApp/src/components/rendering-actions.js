import toDoListItem from '../tamplates/todoListItem.hbs';
import sortActions from './sort-actions';

const refs = {
  toDosList: document.querySelector('.js-todo-list'),
};

// redindering actions, where creating markUp
// array reverse for order

const renderingActions = {
  createListMarkUp(arrOfToDos) {
    return [...arrOfToDos]
      .reverse()
      .map((item, idx) => toDoListItem({ positionNumber: idx, ...item }))
      .join('');
  },
  updatingToDoList() {
    const markUp = this.createListMarkUp(sortActions.sort());
    refs.toDosList.innerHTML = '';
    refs.toDosList.insertAdjacentHTML('beforeend', markUp);
  },
};

export { renderingActions };
