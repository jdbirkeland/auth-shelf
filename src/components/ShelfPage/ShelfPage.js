import React, { useState } from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ShelfForm from '../ShelfForm/ShelfForm';


function ShelfPage() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({type: 'FETCH_DISPLAY'})
  }, [dispatch]);


  return (
    <div className="container">
      <ShelfForm />
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      
    </div>
  );
}

export default ShelfPage;
