import arrOfTasks from './tasks';
import { renderingActions } from './rendering-actions';
import createActions from './createItem-actions';
import * as basicLightbox from 'basiclightbox';
import editToDoItemTamlate from '../tamplates/editToDoItem-tamlate.hbs';
import Toastify from 'toastify-js';

const updatingActions = {
  addToTasks(elem) {
    // when adding, pushing new item to array and updating localStorage
    arrOfTasks.push(elem);
    this.updateLocalStorage();
  },
  deleteFromTasks(id) {
    // when deliting, finding target element and splicing it
    // after updating and re-render
    arrOfTasks.splice(
      arrOfTasks.findIndex(item => item.id === id),
      1,
    );
    this.updateLocalStorage();
    renderingActions.updatingToDoList(arrOfTasks);
  },
  updateStatus(id) {
    // when turning status to DONE, finding target element
    // changing it, and updating, then re-render
    arrOfTasks.forEach(item =>
      item.id === id ? (item.status = 'done') : item,
    );
    this.updateLocalStorage();
    renderingActions.updatingToDoList(arrOfTasks);
  },
  editTasks(id) {
    // actions for editing tasks
    // opening modal window, with fields, the same as at creating,
    // but with current values in fields
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
      .addEventListener('click', () => {
        if (!document.querySelector('.create-item__input-title').value) {
          Toastify({
            text: "Title can't be empty!",
            backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
            className: 'info',
          }).showToast();
          return;
        }
        // if all good, finding target element, replacing old element with new element
        arrOfTasks.splice(
          curentIdx,
          1,
          createActions.createAndEditObjectOfItem(id),
        );
        // updating and re-render
        this.updateLocalStorage();
        renderingActions.updatingToDoList(arrOfTasks);
        lightBox.close();
      });
  },
  updateSortOrder({ oldIndex, newIndex, oldContainer }) {
    // trigered by DragNDrop action
    // if items filtered, DragNDrop dont saving order
    if (oldContainer.children.length - 2 < arrOfTasks.length) return;
    const newArr = [...arrOfTasks].reverse();
    // finding element that was moved,
    // splicing it
    // and finally aditing it to the new place
    const movedItems = newArr.splice(oldIndex, 1);
    newArr.splice(newIndex, 0, ...movedItems);
    arrOfTasks.splice(0, arrOfTasks.length, ...newArr.reverse());
    // after udating localStorage
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
  // on page load getting locally saved items and renring all tasks
  updatingActions.getLocalStorageItems();
  renderingActions.updatingToDoList(arrOfTasks);
});

export { updatingActions };
