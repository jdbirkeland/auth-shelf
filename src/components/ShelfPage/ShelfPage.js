import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function ShelfPage() {

  const dispatch = useDispatch();

  const display = useSelector(store => store.display);

  useEffect(() => {
    dispatch({type: 'FETCH_DISPLAY'})
  }, []);




  return (
    <div className="container">
      <h2>Shelf</h2>

      {display.map(item => {
        return(
          <div key={item.id}>
          <p >{item.description}</p>
          <img src={item.image_url}/>
          </div>)
      })}

      {/* <p>All of the available items can be seen here.</p> */}
    </div>
  );
}

export default ShelfPage;
