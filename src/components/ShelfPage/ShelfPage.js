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




  return (
    <div className="container">
      <ShelfForm />
      <h2>Shelf</h2>

      {display.map(item => {
        return(
          <div key={item.id}>
          <p >{item.description}</p>
          <img className="items" src={item.image_url}/>
          </div>)
      })}

      {/* <p>All of the available items can be seen here.</p> */}
    </div>
  );
}

export default ShelfPage;
