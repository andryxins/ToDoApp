'use strict';
import tasksArr from './tasks';
import { renderingActions } from './rendering-actions';
import { updatingActions } from './updatingTasks-actions';

const refs = {
  form: document.querySelector('#searchForm'),
  toDosList: document.querySelector('.js-todo-list'),
};

const sortActions = {
  searchByTitle(arr, searchQuerry) {
    return searchQuerry
      ? arr.filter(item =>
          item.title.toLowerCase().includes(searchQuerry.toLowerCase()),
        )
      : arr;
  },
  sortByStatus(arr, status) {
    return status !== 'all' ? arr.filter(item => item.status === status) : arr;
  },
  sortByPriority(arr, priority) {
    return priority !== 'all'
      ? arr.filter(item => item.priority === priority)
      : arr;
  },
  sort() {
    const searchValues = Array.from(refs.form.elements).map(item => item.value);
    // переделать этот пиздец!!!!
    const sortedByInputText = this.searchByTitle(tasksArr, searchValues[0]);
    const sortedByStatus = this.sortByStatus(
      sortedByInputText,
      searchValues[1],
    );
    const sortedByPriority = this.sortByPriority(
      sortedByStatus,
      searchValues[2],
    );
    return sortedByPriority;
  },
};
refs.toDosList.addEventListener('click', e => {
  if (e.target.dataset.action) {
    updatingActions[e.target.dataset.action](e.target.parentNode.dataset.id);
  }
});
refs.form.addEventListener('input', e => renderingActions.updatingToDoList());

export default sortActions;
