import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
import transactionsData from './db.json'; // Import the transactions data from db.json

function App() {
  const [transactions, setTransactions] = useState(transactionsData);

  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    // Update the state to include the new transaction
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (searchTerm) => {
    // Filter transactions based on the search term
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>Transaction App</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar onSearch={handleSearch} />
      <TransactionsTable transactions={filteredTransactions.length > 0 ? filteredTransactions : transactions} />
    </div>
  );
}

export default App;