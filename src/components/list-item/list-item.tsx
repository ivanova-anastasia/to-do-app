import React, { useState } from 'react';
import { ListGroup, Button, InputGroup, FormControl } from 'react-bootstrap';
import { MdModeEdit, MdDeleteOutline, MdDone, MdCancel } from 'react-icons/md';

import './list-item.css';

type ListItemProps = {
  todo: IToDoItem;
  deleteToDoItem: (item: IToDoItem) => void;
  editToDoItem: (item: IToDoItem, newDescription: string) => void;
};

const ListItem = ({
  todo,
  deleteToDoItem,
  editToDoItem,
}: ListItemProps): JSX.Element => {
  const [updatedValue, setUpdatedValue] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const enableEditing = () => {
    setIsEditing(true);
  };

  const disableEditing = () => {
    setIsEditing(false);
    setUpdatedValue(null);
  };

  const saveUpdatedValue = () => {
    if (updatedValue !== todo.description && updatedValue?.trim()) {
      editToDoItem(todo, updatedValue);
    }
    disableEditing();
  };

  const handleUpdateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedValue(event.target.value);
  };

  const editButton = (
    <Button type='submit' variant='outline-info' onClick={enableEditing}>
      <MdModeEdit />
    </Button>
  );

  const deleteButton = (
    <Button variant='outline-danger' onClick={() => deleteToDoItem(todo)}>
      <MdDeleteOutline />
    </Button>
  );

  const saveButton = (
    <Button variant='outline-success' onClick={saveUpdatedValue}>
      <MdDone />
    </Button>
  );

  const cancelButton = (
    <Button variant='outline-secondary' onClick={disableEditing}>
      <MdCancel />
    </Button>
  );

  return (
    <ListGroup.Item
      id='list-item'
      action
      as='li'
      className='d-flex justify-content-between align-items-start'
    >
      <InputGroup>
        <FormControl
          disabled={!isEditing}
          className={
            isEditing ? 'list-item__input' : 'list-item__input_disabled'
          }
          value={updatedValue === null ? todo.description : updatedValue}
          onChange={handleUpdateInput}
        />
        {isEditing ? (
          <>
            {saveButton}
            {cancelButton}
          </>
        ) : (
          <>
            {editButton}
            {deleteButton}
          </>
        )}
      </InputGroup>
    </ListGroup.Item>
  );
};

export default ListItem;
