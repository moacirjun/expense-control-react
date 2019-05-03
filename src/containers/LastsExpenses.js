import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { expensesType } from '../types/index';
import ExpenseList from '../components/expenses-list/ExpensesList';
import { fetchExpenses } from '../actions/ExpensesActions';
import { requestExpenses } from '../store/actions/expenses';

class LastExpenses extends Component {
  constructor(props) {
    super(props);

    const { expenses } = this.props;
    this.expenses = expenses;
  }

  componentDidMount() {
    const { loadExpensesProp } = this.props;
    loadExpensesProp();
  }

  render() {
    const { expenses } = this.props;

    return (
      <ExpenseList expenses={expenses.items} />
    );
  }
}

LastExpenses.propTypes = {
  loadExpensesProp: propTypes.func.isRequired,
  expenses: propTypes.shape({
    items: expensesType,
    isFetching: propTypes.bool,
  }),
};

LastExpenses.defaultProps = {
  expenses: [],
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = dispatch => ({
  loadExpensesProp: () => dispatch(requestExpenses()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LastExpenses));
