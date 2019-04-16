import { combineReducers } from "redux";
import * as ExpensesActionsTypes from '../actions/ExpensesActions';

const expenses = (
    state = {
        items: [], 
        isFetching: false
    },
    action
) => {
    switch (action.type) {
        case ExpensesActionsTypes.EXPENSE_REQUEST:
            return {
                ...state,
                isFetching: true
            };
    
        case ExpensesActionsTypes.EXPENSES_SUCCESS:
            return {
                ...state,
                items: state.items.concat(action.response),
                isFetching: false,
            }

        case ExpensesActionsTypes.EXPENSES_FAIL:
            return {
                ...state,
                isFetching: false
            };

        default:
            return state;
    }
}

const rootReducers = combineReducers({
    expenses
});

export default rootReducers;