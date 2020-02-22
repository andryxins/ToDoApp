import * as basicLightbox from 'basiclightbox';
import createToDoItemTamplate from '../tamplates/createToDoItem-tamplate.hbs';
import { renderingActions } from './rendering-actions';
import { updatingActions } from './updatingTasks-actions';
import Toastify from 'toastify-js';

import tasksArr from './tasks';

const refs = {
  createBtn: document.querySelector('.js-createBtn'),
};

const createActions = {
  createItem() {
    const lightBox = basicLightbox.create(createToDoItemTamplate());
    lightBox.show();
    const submitBtn = document.querySelector(
      'button[data-action="createTask"]',
    );
    submitBtn.addEventListener('click', () => {
      if (!document.querySelector('.create-item__input-title').value) {
        Toastify({
          text: "Title can't be empty!",
          backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
          className: 'info',
        }).showToast();
        return;
      }
      this.createObjectOfItem();
      lightBox.close();
    });
  },
  createObjectOfItem() {
    const obj = {
      title: document.querySelector('.create-item__input-title').value,
      description: document.querySelector('.create-item__input-description')
        .value,
      priority: Array.from(
        document.querySelectorAll('input[name="priority"]'),
      ).find(item => item.checked).value,
      status: 'open',
      id: Date.now() + '',
    };
    updatingActions.addToTasks(obj);
    renderingActions.updatingToDoList(tasksArr);
  },
};

refs.createBtn.addEventListener(
  'click',
  createActions.createItem.bind(createActions),
);
