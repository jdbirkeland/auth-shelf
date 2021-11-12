import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfForm from '../ShelfForm/ShelfForm';


function ShelfPage() {

  const dispatch = useDispatch();

  const display = useSelector(store => store.display);

  const [editMode, setEditMode] = useState(false);

  const [editItem, setEditItem] = useState({
    id: '',
    description: '',
    image_url: '',
  })


  useEffect(() => {
    dispatch({ type: 'FETCH_DISPLAY' })
  }, []);

  const handleDelete = (item) => {
    console.log(item.id);
    dispatch({
      type: 'DELETE_ITEM',
      payload: item.id
    })
  }

  const handleEdit = (item) => {
    console.log('Test!!!');
    setEditMode(!editMode) //toggle for editMode
  }

  const handleNameChange = (event, property, item) => {
    console.log('This is ITEM', item);
    setEditItem({
      ...editItem,
     id: item,
      [property]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('clicked');
    console.log(editItem);
    dispatch({ type: 'EDIT_ITEM', payload:editItem })
    setEditItem({
      id:'',
      description: '',
      image_url: '',
    })
  }


  return (
    <div className="container">
      <ShelfForm />
      <h2>Shelf</h2>
      <button onClick={() => handleEdit()}>Edit</button>
      {display.map(item => {
        return (
          <div key={item.id}>
            <p >{item.description}</p>
            <img className="items" src={item.image_url} />
            
            {editMode ? 
            <>
            <form onSubmit={handleSubmit}>
          <input
        required
        value={editItem.description}
        onChange={(event) => handleNameChange(event, 'description', item.id)}
        placeholder="Item Description"
        />
        <input 
        required
        value={editItem.image_url}
        onChange={(event) => handleNameChange(event, 'image_url', item.id)}
        placeholder="Image URL"/>

        <button type="submit">UPDATE EDIT</button>
        </form>
         </> :
              <button onClick={() => handleDelete(item)}>Delete Me</button>}
          </div>)
      })}

      {/* <p>All of the available items can be seen here.</p> */}
    </div>
  );
}

export default ShelfPage;
