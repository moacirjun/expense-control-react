import { CALL_API } from "../middlewares/Api";

export const EXPENSE_REQUEST = 'REQUEST_EXPENSES';
export const EXPENSES_SUCCESS = 'EXPENSE_SUCCESS';
export const EXPENSES_FAIL = 'EXPENSES_FAIL';

export const CREATE_EXPENSE_REQUEST = 'CREATE_REQUEST_EXPENSES';
export const CREATE_EXPENSES_SUCCESS = 'CREATE_EXPENSE_SUCCESS';
export const CREATE_EXPENSES_FAIL = 'CREATE_EXPENSES_FAIL';
export const CREATE_EXPENSES_CHANGE_INSERTING_EXPENSE = 'CREATE_EXPENSES_CHANGE_INSERTING_EXPENSE';
export const CREATE_EXPENSE_CLEAR_ERROR = 'CREATE_EXPENSE_CLEAR_ERROR';

export const fetchExpenses = () => ({
    [CALL_API]: {
        types: [EXPENSE_REQUEST, EXPENSES_SUCCESS, EXPENSES_FAIL],
        endpoint: "api/expense",
        teste: "moacir"
    }
})

//fetch Expenses unless it is cached
export const loadExpenses = () => (dispath, getState) => {
    const expenses = getState().expenses;

    if (expenses.items.length) {
        return null;
    }
    
    return dispath(fetchExpenses());
}

export const postExpense = (body) => ({
    [CALL_API]: {
        types: [CREATE_EXPENSE_REQUEST, CREATE_EXPENSES_SUCCESS, CREATE_EXPENSES_FAIL],
        endpoint: "api/expense",
        isPost: true,
        body
    }
})

export const createExpenseAction = () => (dispath, getState) => {
    let expense = getState().CreateExpense.expense;
    return dispath(postExpense(expense));
}

export const changeCreateExpenseAction = (name, value) => ({
    type: CREATE_EXPENSES_CHANGE_INSERTING_EXPENSE,
    name,
    value
})

export const chageCreateExpense = (name, value) => (dispatch, getState) => {
    return dispatch(changeCreateExpenseAction(name, value));
}