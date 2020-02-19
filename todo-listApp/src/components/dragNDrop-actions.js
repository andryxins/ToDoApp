// import { Sortable } from '@shopify/draggable';
import Sortable from '@shopify/draggable/lib/sortable';

const sortable = new Sortable(document.querySelector('.js-todo-list'), {
  draggable: '.todo-list__item',
  delay: 200,
});
