import { takeLatest, takeEvery, put, delay } from 'redux-saga/effects';

const progress = (value) => {
  return put({ type: 'LOADING_PROGRESS', value });
}

function* onSortEnd(action) {
  yield progress(true);
  yield delay(1000);
  yield put({ type: 'ON_SORT_END', value: action.value });
  yield progress(false);
}

function* addCategory() {
  yield put({ type: 'ADD_CATEGORY', value: false });
  yield progress(true);
  yield delay(1000);
  yield progress(false);
}

function* editCategory(action) {
  yield put({ type: 'EDIT_CATEGORY', value: action.id });
  yield progress(true);
  yield delay(1000);
  yield progress(false);
}

function* deleteCategory(action) {
  yield progress(true);
  yield delay(500);
  yield put({ type: 'DELETE_CATEGORY', value: action.id });
  yield progress(false);
}

function* addList(action) {
  yield put({ type: 'ADD_LIST', value: action.id });
  yield progress(true);
  yield delay(1000);
  yield progress(false);
}

function* editList(action) {
  yield put({ type: 'EDIT_LIST', value: action.id });
  yield progress(true);
  yield delay(1000);
  yield progress(false);
}

function* deleteList(action) {
  yield progress(true);
  yield delay(500);
  yield put({ type: 'DELETE_LIST', value: action.id });
  yield progress(false);
}

function* toggleList(action) {
  yield progress(true);
  yield delay(1000);
  yield put({ type: 'TOGGLE_LIST', value: action.id });
  yield progress(false);
}

function* toggleFilter(action) {
  yield progress(true);
  yield delay(1000);
  yield put({ type: 'TOGGLE_FILTER_CATEGORY', value: action.id });
  yield progress(false);
}

function* toggleStatus(action) {
  yield progress(true);
  yield delay(1000);
  yield put({ type: 'TOGGLE_STATUS', value: action.id });
  yield progress(false);
}

export function* saga(){
  yield takeEvery("ON_SORT_END_ASYNC", onSortEnd);
  yield takeLatest("ADD_CATEGORY_ASYNC", addCategory);
  yield takeLatest("EDIT_CATEGORY_ASYNC", editCategory);
  yield takeLatest("DELETE_CATEGORY_ASYNC", deleteCategory);
  yield takeLatest("ADD_LIST_ASYNC", addList);
  yield takeLatest("EDIT_LIST_ASYNC", editList);
  yield takeLatest("DELETE_LIST_ASYNC", deleteList);
  yield takeLatest("TOGGLE_LIST_ASYNC", toggleList);
  yield takeLatest("TOGGLE_FILTER_ASYNC", toggleFilter);
  yield takeLatest("TOGGLE_STATUS_ASYNC", toggleStatus);
}
