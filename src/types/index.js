import propTypes from 'prop-types';

export const expenseType = propTypes.shape({
  name: propTypes.string,
  description: propTypes.string,
  amount: propTypes.string,
  category_id: propTypes.string,
});

export const expensesType = propTypes.arrayOf(expenseType);
