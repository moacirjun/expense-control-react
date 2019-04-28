import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInsertExpense from '../components/FormInsertExpense/FormInsertExpense';
import { createExpenseAction, chageCreateExpense } from '../actions/ExpensesActions';

class CreateExpense extends Component {
    render() {
        return (
            <FormInsertExpense 
                createExpenseAction={this.props.createExpenseAction}
                changeCreateExpenseAction={this.props.chageCreateExpense}
                expense={this.props.expense}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    expense: state.CreateExpense.expense
})

export default connect(mapStateToProps, {createExpenseAction, chageCreateExpense})(CreateExpense);