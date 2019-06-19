import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';
import AuthSaga from './AuthSaga';


export default function* rootSaga() {
    yield all([imagesSaga(), statsSaga(),AuthSaga()]);
}
