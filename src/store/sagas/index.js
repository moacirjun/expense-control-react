import { all, takeLatest } from 'redux-saga/effects';
import { EXPENSE_REQUEST } from '../../actions/ExpensesActions';

import { fetchExpenses } from './expenses';

export default function* rootSaga() {
  yield all([
    takeLatest(EXPENSE_REQUEST, fetchExpenses),
  ]);
}
