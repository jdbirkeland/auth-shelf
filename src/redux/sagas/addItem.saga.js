import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* addItem (action) {
    console.log('in addItem before try');
    
    try {
        console.log('inside addItem try');
        
        yield axios.post('/api/shelf', action.payload)
        yield put({type: 'FETCH_DISPLAY'})
    } catch (err) {
        console.log('Error', err);
        yield put({ type: 'ERROR IN ADD ITEM SAGA' })
        
    }
} // end addItem

function* addItemSaga () {
    yield takeLatest('ADD_ITEM', addItem)
}

export default addItemSaga;