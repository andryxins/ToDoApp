import * as basicLightbox from 'basiclightbox';
import createToDoItemTamplate from '../tamplates/createToDoItem-tamplate.hbs';
import { renderingActions } from './rendering-actions';
import { updatingActions } from './updatingTasks-actions';
import Toastify from 'toastify-js';

import tasksArr from './tasks';

const refs = {
  createBtn: document.querySelector('.js-createBtn'),
};

// creating ToDo item

const createActions = {
  // after clicking on button, showing modal window with settings and fields
  createItem() {
    const lightBox = basicLightbox.create(createToDoItemTamplate());
    lightBox.show();
    const submitBtn = document.querySelector(
      'button[data-action="createTask"]',
    );
    submitBtn.addEventListener('click', () => {
      // smalll validation for title
      if (!document.querySelector('.create-item__input-title').value) {
        Toastify({
          text: "Title can't be empty!",
          backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
          className: 'info',
        }).showToast();
        return;
      }
      // on submit adding to all tasks and updating localStorage
      updatingActions.addToTasks(this.createAndEditObjectOfItem());
      renderingActions.updatingToDoList(tasksArr);
      lightBox.close();
    });
  },
  createAndEditObjectOfItem(id) {
    // creating and editing ligic
    // if editing ToDo item, id dont changing
    const obj = {
      title: document.querySelector('input[name="title"]').value,
      description: document.querySelector('textarea[name="description"]').value,
      priority: Array.from(
        document.querySelectorAll('input[name="priority"]'),
      ).find(item => item.checked).value,
      status: 'open',
      id: id || Date.now() + '',
    };
    return obj;
  },
};

refs.createBtn.addEventListener(
  'click',
  createActions.createItem.bind(createActions),
);

export default createActions;
