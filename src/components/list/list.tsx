import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ListItem from './../list-item';

import './list.css';

const List = (): JSX.Element => {
  return (
    <>
      <ListGroup variant='flush'>
        <ListItem />
        <ListItem />
        <ListItem />
      </ListGroup>
    </>
  );
};

export default List;
