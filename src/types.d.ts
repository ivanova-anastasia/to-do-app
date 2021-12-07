interface IToDoItem {
  id: number;
  description: string;
}

type ToDoItemAction = {
  type: string;
  item: IToDoItem;
};
