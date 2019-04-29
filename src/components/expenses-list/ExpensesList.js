import React, { Component } from 'react';
import ExpenseListItem from './ExpensesListItem';
import { expensesType } from '../../types/index';

class ExpensesList extends Component {
  constructor(props) {
    super(props);

    const { expenses } = props;

    this.expenses = expenses;
  }

  render() {
    return (
      <div className="ExpenseTable">
        <div className="list-group">
          {this.props.expenses.map(expense => <ExpenseListItem expense={expense} key={expense.id} />)}
        </div>
      </div>
    );
  }
}

ExpensesList.propTypes = {
  expenses: expensesType.isRequired,
};

export default ExpensesList;
