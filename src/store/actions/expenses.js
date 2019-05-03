import { EXPENSE_REQUEST, EXPENSES_SUCCESS, EXPENSES_FAIL } from '../../actions/ExpensesActions';

export const requestExpenses = () => ({
  type: EXPENSE_REQUEST,
});

export const successExpenses = expenses => ({
  type: EXPENSES_SUCCESS,
  response: expenses,
});

export const failExpenses = error => ({
  type: EXPENSES_FAIL,
  error,
});
