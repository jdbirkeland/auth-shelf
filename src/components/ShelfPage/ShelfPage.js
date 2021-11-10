import React, { useState } from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ShelfForm from '../ShelfForm/ShelfForm';


function ShelfPage() {

  const dispatch = useDispatch();

  const display = useSelector(store => store.display);

  useEffect(() => {
    dispatch({type: 'FETCH_DISPLAY'})
  }, []);

const handleDelete = (item) => {
  console.log(item.id);
  dispatch({ 
    type: 'DELETE_ITEM',
    payload: item.id
  })
}


  return (
    <div className="container">
      <ShelfForm />
      <h2>Shelf</h2>

      {display.map(item => {
        return(
          <div key={item.id}>
          <p >{item.description}</p>
          <img className="items" src={item.image_url}/>
          <button onClick={() => handleDelete(item)}>Delete Me</button>
          </div>)
      })}

      {/* <p>All of the available items can be seen here.</p> */}
    </div>
  );
}

export default ShelfPage;
