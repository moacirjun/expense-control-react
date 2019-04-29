import React, { Component } from 'react';
import propTypes from 'prop-types';

class FormInsertExpenses extends Component {
  constructor(props) {
    super(props);

    this.handleSubmitForm.bind(this);
    this.handleInputChange.bind(this);

    const { expense } = props;

    this.expense = expense;
  }

  handleSubmitForm(e) {
    e.preventDefault();

    const { createExpenseAction } = this.props;

    createExpenseAction();
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    const { changeCreateExpenseAction } = this.props;

    changeCreateExpenseAction(name, value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="expenseName"
            name="name"
            value={this.expense.name}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="description"
            id="descriptionInput"
            value={this.expense.description}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form-group">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">R$</div>
            </div>
            <input
              type="number"
              className="form-control"
              id="amountInput"
              name="amount"
              value={this.expense.amount}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="categoryInput"
            name="category_id"
            value={this.expense.category_id}
            onChange={this.handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

FormInsertExpenses.propTypes = {
  changeCreateExpenseAction: propTypes.func.isRequired,
  createExpenseAction: propTypes.func.isRequired,
  expense: propTypes.shape({
    name: propTypes.string,
    description: propTypes.string,
    amount: propTypes.number,
    category_id: propTypes.number,
  }).isRequired,
};

export default FormInsertExpenses;
