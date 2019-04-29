import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import FormInsertExpense from '../components/FormInsertExpense/FormInsertExpense';
import { createExpenseAction, chageCreateExpense } from '../actions/ExpensesActions';

const CreateExpense = ({ createExpense, chageCreate, expense }) => (
  <FormInsertExpense
    createExpenseAction={createExpense}
    changeCreateExpenseAction={chageCreate}
    expense={expense}
  />
);

CreateExpense.propTypes = {
  createExpense: propTypes.func.isRequired,
  chageCreate: propTypes.func.isRequired,
  expense: propTypes.shape({
    name: propTypes.string,
    description: propTypes.string,
    amount: propTypes.number,
    category_id: propTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  expense: state.CreateExpense.expense,
});

const mapDispatchToProps = dispatch => ({
  createExpense: () => dispatch(createExpenseAction),
  chageCreate: () => dispatch(chageCreateExpense),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateExpense);
