import * as actionTypes from './action-types';

const reducer = (
  state: IToDoItem[] = [],
  action: ToDoItemAction
): IToDoItem[] => {
  switch (action.type) {
    case actionTypes.ADD_TODO_ITEM:
      return [...state, action.item];
    case actionTypes.DELETE_TODO_ITEM:
      return state.filter((item) => item.id !== action.item.id);
    case actionTypes.EDIT_TODO_ITEM:
      return state.map((item) =>
        item.id === action.item.id ? action.item : item
      );
    default:
      return state;
  }
};

export default reducer;
