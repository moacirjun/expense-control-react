import React, { Component } from 'react';

class ExpensesListItem extends Component {
    formatMoney(money) {
        return `R$ ${money}`;
    }

    render() {
        return (
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{this.props.expense.name}</h5>
                    <small>{this.formatMoney(this.props.expense.amount)}</small>
                </div>
                <p className="mb-1">{this.props.expense.description}</p>
                <small>{this.props.expense.category.name}</small>
            </a>  
        )
    }
}

export default ExpensesListItem;