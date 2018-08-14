import React from 'react';
import {connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses'
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
       { props.expense.map((expense) => {
           return <ExpenseListItem key={expense.id}  {...expense}/>
        })}
    </div>
)

const mapStateToProp = (state) => {
    return {
        expense: selectExpenses(state.expenses, state.filters)
    }
}



export default connect(mapStateToProp)(ExpenseList);