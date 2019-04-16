import React, {Component} from 'react';
import ExpenseListItem from './ExpensesListItem';

class ExpensesList extends Component {
    render() {   
        return (
            <div className="ExpenseTable">
                <div className="list-group">
                    {this.props.expenses.map( expense => 
                        <ExpenseListItem expense={expense} key={expense.id}></ExpenseListItem>
                    )}
                </div>
            </div>
        );
    }
}

export default ExpensesList;