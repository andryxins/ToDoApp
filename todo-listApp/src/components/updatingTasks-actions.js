import arrOfTasks from './tasks';
import { renderingActions } from './rendering-actions';
import * as basicLightbox from 'basiclightbox';
import editToDoItemTamlate from '../tamplates/editToDoItem-tamlate.hbs';

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
  updateStatus(id) {
    arrOfTasks.forEach(item =>
      item.id === id ? (item.status = 'done') : item,
    );
    this.updateLocalStorage();
    renderingActions.updatingToDoList(arrOfTasks);
  },
  editTasks(id) {
    const curentIdx = arrOfTasks.findIndex(item => item.id === id);
    const lightBox = basicLightbox.create(
      editToDoItemTamlate(arrOfTasks[curentIdx]),
    );
    lightBox.show();
    document
      .querySelectorAll('input[name=priority]')
      .forEach(elem =>
        elem.value === arrOfTasks[curentIdx].priority
          ? elem.setAttribute('checked', 'checked')
          : elem,
      );
    document
      .querySelector('button[data-action="editTaskBtn"]')
      .addEventListener('click', e => {
        if (!document.querySelector('.create-item__input-title').value) return;
        const editObj = {
          title: document.querySelector('.create-item__input-title').value,
          description: document.querySelector('.create-item__input-description')
            .value,
          priority: Array.from(
            document.querySelectorAll('input[name="priority"]'),
          ).find(item => item.checked).value,
          status: 'open',
          id: id,
        };
        arrOfTasks.splice(curentIdx, 1, editObj);
        this.updateLocalStorage();
        renderingActions.updatingToDoList(arrOfTasks);
        lightBox.close();
      });
  },
  updateSortOrder({ oldIndex, newIndex, oldContainer }) {
    if (oldContainer.children.length - 2 < arrOfTasks.length) return;
    const newArr = [...arrOfTasks].reverse();
    const movedItems = newArr.splice(oldIndex, 1);
    newArr.splice(newIndex, 0, ...movedItems);
    arrOfTasks.splice(0, arrOfTasks.length, ...newArr.reverse());
    this.updateLocalStorage();
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
