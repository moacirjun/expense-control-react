import React, { Component } from 'react';
import ExpenseList from '../components/expenses-list/ExpensesList2';
import { loadExpenses } from '../actions/ExpensesActions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class LastExpenses extends Component {

  componentDidMount() {
    this.props.loadExpenses()
  }

  render() {
    return (
        <ExpenseList  expenses={this.props.expenses.items}></ExpenseList>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    expenses: state.expenses
  }
}

export default withRouter(connect(mapStateToProps, {
  loadExpenses,
})(LastExpenses))
