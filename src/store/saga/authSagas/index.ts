import {takeEvery, takeLatest} from 'redux-saga/effects';
function* hello() {
  console.log('hello');
}
export default function* authSaga() {
  yield takeLatest('*', hello);
}
