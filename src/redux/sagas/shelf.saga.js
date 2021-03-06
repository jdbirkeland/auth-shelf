import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchDisplay() {
    try {
        const response = yield axios.get('/api/shelf')
        yield put({ type: 'SET_DISPLAY', payload: response.data })
    } catch (err) {
        console.log('Error in FETCH_DISPLAY', err);
    }
}


//function to delete
function* deleteItem(action) {
    try {
        yield axios.delete(`/api/shelf/${action.payload}`);
        yield put({ type: 'FETCH_DISPLAY' })
    } catch (error) {
        console.log('Error in Delete', error);
    }
} //end deleteItem

//function to update
function* updateItem(action) {
    try{
        console.log(action.payload);
        yield axios.put(`/api/shelf/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_DISPLAY'})
    } catch(error) {
        console.log('Error in Update', error);
    }
}//end updateItem


function* displaySaga() {
    yield takeLatest('FETCH_DISPLAY', fetchDisplay)
    yield takeLatest('DELETE_ITEM', deleteItem)
    yield takeLatest('EDIT_ITEM', updateItem)
}

export default displaySaga;