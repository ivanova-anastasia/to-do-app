import * as actionTypes from './action-types';

let nextId: number = 0;

export const addToDoItem = (description: string): ToDoItemAction => {
  const newItem: IToDoItem = {
    id: nextId++,
    description,
  };
  return {
    item: newItem,
    type: actionTypes.ADD_TODO_ITEM,
  };
};

export const deleteToDoItem = (item: IToDoItem): ToDoItemAction => {
  return {
    item,
    type: actionTypes.DELETE_TODO_ITEM,
  };
};

export const editToDoItem = (
  item: IToDoItem,
  newDescription: string
): ToDoItemAction => {
  const newItem: IToDoItem = {
    id: item.id,
    description: newDescription,
  };
  return {
    item: newItem,
    type: actionTypes.EDIT_TODO_ITEM,
  };
};
