import React, { Component } from 'react';

class FormInsertExpenses extends Component {

    handleInputChange = (e) => {
        this.props.changeCreateExpenseAction(e.target.name, e.target.value);
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.props.createExpenseAction();
    }

    render = () => (
        <form onSubmit={this.handleSubmitForm}>

            <div className="form-group">
                <label htmlFor="expenseName">Nome</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="expenseName" 
                    name="name"
                    value={this.props.expense.name}
                    onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="descriptionInput">Descrição</label>
                <input 
                    type="text" 
                    className="form-control"
                    name="description"
                    id="descriptionInput"
                    value={this.props.expense.description}
                    onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="amountInput">Total</label>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">R$</div>
                    </div>
                    <input 
                        type="number"
                        className="form-control"
                        id="amountInput"
                        name="amount"
                        value={this.props.expense.amount}
                        onChange={this.handleInputChange}
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="categoryInput">Categoria</label>
                <input
                    type="number" 
                    className="form-control"
                    id="categoryInput"
                    name="category_id"
                    value={this.props.expense.category_id}
                    onChange={this.handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default FormInsertExpenses;