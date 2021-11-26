import { call, put, takeLatest } from 'redux-saga/effects';
import { CREATE_USER, createUserSuccess, createUserFailure } from '../action/UserAction';
import api from './UserApi'

function* createUser(action) {
    console.log("UserSaga Create");
    console.log("Action create User is" + JSON.stringify(action));

    try {
        const { username, email, password } = action;
        let { data } = yield call(api.adduser, { username, email, password });
        console.log("add User saga" + JSON.stringify(data))
        yield put(createUserSuccess(data));
    } catch (err) {
        yield put(createUserFailure());
        console.log("ERROR IS" + JSON.stringify(err.response.data));
        return err
    }
}

export default function* UserSaga() {

    yield takeLatest(CREATE_USER, createUser);

}