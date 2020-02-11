import arrOfTasks from './tasks';
import { renderingActions } from './rendering-actions';

const updatingActions = {
  addToTasks(elem) {
    arrOfTasks.push(elem);
    this.updateLocalStorage();
  },
  deleteFromTasks(id) {
    arrOfTasks.splice(
      arrOfTasks.findIndex(item => item.id === id),
      1,
    );
    this.updateLocalStorage();
    renderingActions.updatingToDoList(arrOfTasks);
  },
  updateLocalStorage() {
    try {
      localStorage.setItem('arrOfTasks', JSON.stringify(arrOfTasks));
    } catch (e) {
      console.log(e);
    }
  },
  getLocalStorageItems() {
    try {
      const localToDos = localStorage.getItem('arrOfTasks');
      console.log(JSON.parse(localToDos));
      arrOfTasks.push(...JSON.parse(localToDos));
    } catch (e) {
      console.log(e);
    }
  },
};

document.addEventListener('DOMContentLoaded', () => {
  updatingActions.getLocalStorageItems();
  renderingActions.updatingToDoList(arrOfTasks);
});

export { updatingActions };
