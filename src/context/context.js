import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount" : 75, "category" : "House", "type" : "Expense", "date":"2020-12-22", "id" : "a429ef6d-1591-475b-88c0-5620edd9d876"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {

    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action creators. 
    const deleteTransaction = (id) => { dispatch({ type: 'DELETE_TRANSACTION', payload: id }); }
    const addTransaction = (transaction) => { dispatch({ type: 'ADD_TRANSACTION', payload: transaction }); }

    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }} >
            {children}
        </ExpenseTrackerContext.Provider>
    )
}