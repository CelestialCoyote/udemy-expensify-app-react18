import React from 'react';
import { Link } from 'react-router-dom';
import './ExpenseListItem.css';


const ExpenseListItem = ({ id, description, amount, note, createdAt }) => (
    <div className="expense-list-item">
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
        <p>{note}</p>
    </div>
);


export default ExpenseListItem;
