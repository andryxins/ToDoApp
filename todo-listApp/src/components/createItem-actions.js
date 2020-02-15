import * as basicLightbox from 'basiclightbox';
import createToDoItemTamplate from '../tamplates/createToDoItem-tamplate.hbs';
import { renderingActions } from './rendering-actions';
import { updatingActions } from './updatingTasks-actions';

import tasksArr from './tasks';

const refs = {
  createBtn: document.querySelector('.js-createBtn'),
};

const createActions = {
  createItem(e) {
    const lightBox = basicLightbox.create(createToDoItemTamplate());
    lightBox.show();
    const submitBtn = document.querySelector(
      'button[data-action="createTask"]',
    );
    submitBtn.addEventListener('click', e => {
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
