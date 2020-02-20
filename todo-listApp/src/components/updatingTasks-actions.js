import arrOfTasks from './tasks';
import { renderingActions } from './rendering-actions';
import * as basicLightbox from 'basiclightbox';
import editToDoItemTamlate from '../tamplates/editToDoItem-tamlate.hbs';

// FOR THE EXPAMPLE OF UPDATING TASKS AFTER DRAGNDROP
// const refs = {
//   toDoList: document.querySelector('.js-todo-list'),
// };

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
  updateSortOrder({ oldIndex, newIndex }) {
    const oldArr = [...arrOfTasks].reverse();
    const newArr = [
      ...oldArr.slice(0, newIndex),
      ...oldArr.slice(oldIndex, oldIndex + 1),
      ...oldArr.slice(newIndex),
    ];
    oldIndex < newIndex
      ? newArr.splice(oldIndex, 1)
      : newArr.splice(oldIndex + 1, 1);
    arrOfTasks.splice(0, arrOfTasks.length, ...newArr.reverse());
    this.updateLocalStorage();
  },
  //
  // ONE OF THE EXAMPLES OF SORTING TASKS AFTER DRAGNDROP
  //
  // updateSortOrder({ oldIndex, newIndex }) {
  //   const newArr = Array.from(refs.toDoList.children)
  //     .map(item => item.dataset.id)
  //     .map(item => arrOfTasks.find(oldItem => oldItem.id === item));

  //   oldIndex < newIndex
  //     ? newArr.splice(oldIndex, 1)
  //     : newArr.splice(oldIndex + 1, 1);
  //   newArr.pop();
  //   console.log(newArr);
  // },
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
