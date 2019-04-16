import React, {Component} from 'react';
import ExpenseListItem from './ExpensesListItem';

class ExpensesList extends Component {

    constructor(props)
    {
        super(props)
        this.state = this.getInitialState();
    }

    getInitialState = () => (
        {
            expenses: []
        }
    ); 

    componentDidMount() {
        console.log('loading...');

        this.callApi()
            .then(res => this.setState({ expenses: res }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/expense');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div className="ExpenseTable">
                <div className="list-group">
                    {this.state.expenses.map( expense => 
                        <ExpenseListItem expense={expense} key={expense.id}></ExpenseListItem>
                    )}
                </div>
            </div>
        );
    }
}

export default ExpensesList;