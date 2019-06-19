import { put, call, takeEvery } from 'redux-saga/effects';

import { setError } from '../actions';
import { AUTH } from '../constants';
import { authenticateUser } from '../api';

export const getPage = state => state.nextPage;

export function* handleLogin(action) {
    try {
        // const page = yield select(getPage);
        console.log(action.creds)
        const res = yield call(authenticateUser, action.creds);
        console.log(res);
        // yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export function* handleReg(action) {
    try {
        // const page = yield select(getPage);
        console.log(action.creds)
        const res = yield call(authenticateUser, action.data);
        console.log(res)
        // yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(AUTH.LOGIN, handleLogin);
    yield takeEvery(AUTH.REG, handleReg);
}
