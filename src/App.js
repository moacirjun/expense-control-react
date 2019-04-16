import React, { Component } from 'react';
import Header from './components/layout/Header';
import ExpenseList from './components/expenses-list/ExpensesList2';
import { loadExpenses } from "./actions/ExpensesActions";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.loadExpenses()
  }

  render() {
    return (
      <div className="App">
        <Header></Header>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ExpenseList expenses={this.props.expenses.items}></ExpenseList>
            </div>
          </div>
        </div>
      </div>
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
})(App))
