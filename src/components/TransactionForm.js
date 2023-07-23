import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new transaction object with user input
    const newTransaction = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      description,
      category: 'Income', // Set the category as needed
      amount: parseFloat(amount),
    };
    // Call the onAddTransaction function to update the parent component state
    onAddTransaction(newTransaction);
    // Reset the form fields
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;