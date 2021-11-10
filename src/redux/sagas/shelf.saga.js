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

function* displaySaga() {
    yield takeLatest('FETCH_DISPLAY', fetchDisplay)
}

export default displaySaga;