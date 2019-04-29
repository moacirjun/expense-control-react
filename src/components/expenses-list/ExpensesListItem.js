import React from 'react';
import { expenseType } from '../../types/index';


const formatMoney = money => `R$ ${money}`;

const ExpensesListItem = ({ expense }) => (
  <div className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{expense.name}</h5>
      <small>{formatMoney(expense.amount)}</small>
    </div>
    <p className="mb-1">{expense.description}</p>
    <small>{expense.category.name}</small>
  </div>
);

ExpensesListItem.propTypes = {
  expense: expenseType.isRequired,
};

export default ExpensesListItem;
