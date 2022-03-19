import React, { useState } from "react";

const Home = () => {
  const [Transactions, setTransactions] = useState([
    { id: 134535, name: "Mr. X", amount: 5000 },
    { id: 234535, name: "Mr. Y", amount: 6000 },
    { id: 334535, name: "Mr. Z", amount: 10000 },
  ]);
  const unit = "INR";

  const addTransaction = (transaction) => {
    setTransactions([...Transactions, transaction]);
    // setTransactions()
  };
  return (
    <div className="container">
      <h4 className="center">List of all transactions</h4>

      <ol className="collection">
        {Transactions.map((transaction) => {
          return (
            <li className="collection-item" key={transaction.id}>
              {transaction.name} donated {transaction.amount} {unit}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Home;
