import { combineReducers } from 'redux';
import * as ExpensesActionsTypes from '../actions/ExpensesActions';

const expenses = (
  state = {
    items: [],
    isFetching: false,
  },
  action,
) => {
  switch (action.type) {
    case ExpensesActionsTypes.EXPENSE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case ExpensesActionsTypes.EXPENSES_SUCCESS:
      return {
        ...state,
        items: state.items.concat(action.response),
        isFetching: false,
      };

    case ExpensesActionsTypes.EXPENSES_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};

const blankExpense = {
  name: '',
  description: '',
  amount: 0,
  category: {
    id: 1,
    name: '',
    description: '',
  },
  category_id: 1,
};

const CreateExpense = (
  state = {
    expense: blankExpense,
    isFetching: false,
    error: null,
  },
  action,
) => {
  switch (action.type) {
    case ExpensesActionsTypes.CREATE_EXPENSE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case ExpensesActionsTypes.CREATE_EXPENSES_SUCCESS:
      return {
        ...state,
        expense: blankExpense,
        isFetching: false,
        error: null,
      };

    case ExpensesActionsTypes.CREATE_EXPENSES_FAIL:
      return {
        ...state,
        isFetching: false,
        error: {
          message: action.message,
        },
      };

    case ExpensesActionsTypes.CREATE_EXPENSES_CHANGE_INSERTING_EXPENSE:
      return {
        ...state,
        expense: {
          ...state.expense,
          [action.name]: action.value,
        },
      };

    case ExpensesActionsTypes.CREATE_EXPENSE_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

const rootReducers = combineReducers({
  expenses,
  CreateExpense,
});

export default rootReducers;
