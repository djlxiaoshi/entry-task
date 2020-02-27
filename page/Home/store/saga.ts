import { put, takeEvery, takeLatest,  call } from 'redux-saga/effects';
import { setListData } from './actionCreators';
import { GET_LIST_DATA } from './actionTypes';
import * as Api from './api';

function *getListData (action) {
    const result = yield call(Api.getListData, action.payload);
    yield put(setListData(result));

}

export function *watchGetListData () {
    yield takeLatest(GET_LIST_DATA, getListData);
}
