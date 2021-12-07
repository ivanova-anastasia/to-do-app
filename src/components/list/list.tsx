import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ListItem from './../list-item';
import { connect } from 'react-redux';
import { deleteToDoItem, editToDoItem } from './../../redux/action-creators';

import './list.css';

type ListProps = {
  todos: IToDoItem[];
  deleteToDoItem: (item: IToDoItem) => void;
  editToDoItem: (item: IToDoItem, newDescription: string) => void;
};

const List = ({
  todos,
  deleteToDoItem,
  editToDoItem,
}: ListProps): JSX.Element => {
  const itemsLits = todos.map((todo: IToDoItem) => (
    <ListItem
      key={todo.id}
      todo={todo}
      deleteToDoItem={deleteToDoItem}
      editToDoItem={editToDoItem}
    />
  ));
  return (
    <>
      <ListGroup variant='flush'>
        {itemsLits.length ? (
          itemsLits
        ) : (
          <p className='list_empty'>Empty list</p>
        )}
      </ListGroup>
    </>
  );
};

const mapStateToProps = (store: IToDoItem[]) => ({ todos: store });
export default connect(mapStateToProps, { editToDoItem, deleteToDoItem })(List);
