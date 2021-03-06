import { takeEvery, takeLatest, take, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/userAction';
import * as api from '../api/users'

function* getUsers() {
    console.log('im in amit');
    try {
        const result = yield call(api.getUsers)
        const { data } = result.data
        yield put(actions.getUsersSuccess(data))

    } catch (e) {
        console.log(e, 'error');
    }
}
function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

function* createUser(action) {
    const { firstName, lastName } = action.payload
    try {
        yield call(api.createUser, { firstName, lastName })
        yield call(getUsers)
    } catch (e) {
        console.log(e);
    }
}
function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)
}

function* deleteUser({ userId }) {
    try {
        yield call(api.deleteUser, userId)
        yield call(getUsers)
    } catch (e) {
            console.log(e);
    }
}
function* watchDeleteUserRequest() {
    while (true) {
        const action = yield take(actions.Types.DELETE_USER_REQUEST)
        console.log(action);
        yield call(deleteUser, {
            userId: action.payload.userId
        })
    }
}
const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
]

export { usersSagas }