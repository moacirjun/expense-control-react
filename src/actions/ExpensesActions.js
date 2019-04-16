import { CALL_API } from "../middlewares/Api";

export const EXPENSE_REQUEST = 'REQUEST_EXPENSES';
export const EXPENSES_SUCCESS = 'EXPENSE_SUCCESS';
export const EXPENSES_FAIL = 'EXPENSES_FAIL';

export const fetchExpenses = () => ({
    [CALL_API]: {
        types: [EXPENSE_REQUEST, EXPENSES_SUCCESS, EXPENSES_FAIL],
        endpoint: "api/expense",
        teste: "moacir"
    }
})

//fetch Expenses unless it is cached
export const loadExpenses = () => (dispath, getState) => {
    console.log('in loadExpenses');

    const expenses = getState().expenses;
    
    console.log(expenses);

    if (expenses.items.length) {
        return null;
    }
    
    console.log('dipatching fetchExpenses');
    console.log(fetchExpenses());
    return dispath(fetchExpenses());
}