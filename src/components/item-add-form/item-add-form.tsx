import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addToDoItem } from './../../redux/action-creators';
import { connect } from 'react-redux';

import './item-add-form.css';

type ItemAddFormProps = {
  addToDoItem: (description: string) => void;
};

const ItemAddForm = ({ addToDoItem }: ItemAddFormProps): JSX.Element => {
  const [inputValue, updateInputValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToDoItem(inputValue);
    updateInputValue('');
  };

  const handleUpdateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateInputValue(event.target.value);
  };

  return (
    <Form className='to-do-form' onSubmit={handleSubmit}>
      <Form.Floating className='mb-3'>
        <Form.Control
          id='floatingInputCustom'
          type='text'
          value={inputValue}
          placeholder='to do item'
          onChange={handleUpdateInput}
          required
        />
        <label htmlFor='floatingInputCustom'>Enter To-Do item...</label>
      </Form.Floating>
      <Button variant='outline-primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default connect(null, { addToDoItem })(ItemAddForm);
