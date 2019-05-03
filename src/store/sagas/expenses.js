import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { successExpenses, failExpenses } from '../actions/expenses';

export function* fetchExpenses() {
  try {
    const { data } = yield call(api.get, 'expense');
    yield put(successExpenses(data));
  } catch (error) {
    yield put(failExpenses(error));
  }
}
