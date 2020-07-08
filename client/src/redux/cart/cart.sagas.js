import { all, call, takeLatest, put } from 'redux-saga/effects'

import UserActionTypes from '../user/user.types'
import { clearCart } from './cart.actions'

// methods from here
export function* clearCartOnSignOut() {
    yield put(clearCart())
}

// listeners from here
export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

// here we add into it's own saga
export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}