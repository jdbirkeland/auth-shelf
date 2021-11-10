import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function ShelfPage() {

  const dispatch = useDispatch();

  const [newItem, setNewItem] = useState({
    description: '',
    image_url: '',
  })

  const handleNameChange = (event, property) => {
    setNewItem({
      ...newItem, 
      [property]: event.target.value
    })
  } // end handleNameChange

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('clicked');
    console.log(newItem);
    dispatch({ type: 'ADD_ITEM', payload: newItem })
    setNewItem({
      description: '',
      image_url: '',
    })
  } // end handleSubmit

  return (
    <div className="container">

      <form onSubmit={handleSubmit}> 
        <input
        required
        value={newItem.description}
        onChange={(event) => handleNameChange(event, 'description')}
        placeholder="Item Description"
        />
        <input 
        required
        value={newItem.image_url}
        onChange={(event) => handleNameChange(event, 'image_url')}
        placeholder="Image URL"/>

        <button type="submit">ADD TO SHELF</button>
      </form>

      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      
    </div>
  );
}

export default ShelfPage;
