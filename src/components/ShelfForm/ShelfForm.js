import { useDispatch } from "react-redux";
import { useState } from "react";

// importing filestack for image upload; 

// import ReactFilestack from 'react-filestack';
// const client = filestack.init('A09e78cDRI65bPtSGZMEwz');

import { PickerOverlay } from 'filestack-react';



function ShelfForm() {

  const dispatch = useDispatch();

  const [imageUploadDisplayStatus, setImageUploadDisplayStatus] = useState(false)

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


    const uploadImage = () => {
      console.log('CLICKED on uploadImage');
      
    }


  } // end handleSubmit
  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        value={newItem.description}
        onChange={(event) => handleNameChange(event, 'description')}
        placeholder="Item Description"
      />


      <PickerOverlay
        apikey='A09e78cDRI65bPtSGZMEwz'
        onSuccess={(response) => console.log(response)}
        onUploadDone={(response)=> console.log(response)}
        // onError={(e) => console.log(e)}
        buttonText={'Pick File'}
      />

      <button onClick={() => {uploadImage}}>UPLOAD IMAGE</button>

      {/* <input
        required
        value={newItem.image_url}
        onChange={(event) => handleNameChange(event, 'image_url')}
        placeholder="Image URL" /> */}

      <button type="submit">ADD TO SHELF</button>

    </form>
  )
}

export default ShelfForm;