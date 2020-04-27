import Sortable from '@shopify/draggable/lib/sortable';
import { updatingActions } from './updatingTasks-actions';

// DragNDrop actions
// using Sortable lib

const sortable = new Sortable(document.querySelector('.js-todo-list'), {
  draggable: '.todo-list__item',
  delay: 200,
});

sortable.on('sortable:stop', e => updatingActions.updateSortOrder(e));
