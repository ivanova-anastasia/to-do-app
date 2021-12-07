import React from 'react';
import ItemAddForm from './../item-add-form';

const HomePage = (): JSX.Element => {
  return (
    <>
      <p>
        “You can, you should, and if you’re brave enough to start, you will.” —
        Stephen King
      </p>
      <ItemAddForm />
    </>
  );
};

export default HomePage;
