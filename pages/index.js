import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Counter from './components/Counter';
import ExpenseItem from './components/ExpenseItem';
import ExpensesFilter from './components/ExpensesFilter';
import NewExpense from './components/NewExpense/NewExpense';

const Home = () => {
  const expenses = [
    { id: 1, title: 'Paper', amount: 25, date: new Date('2021, 2, 27') },
    { id: 2, title: 'Fruits', amount: 250, date: new Date('2022, 4, 28') },
    { id: 3, title: 'Salt', amount: 7, date: new Date('2022, 5, 26') },
    { id: 4, title: 'Soap', amount: 125, date: new Date('2025, 1, 25') },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In index.js');
    console.log(expense);
  };

  const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <div className="expenses">
        <ExpensesFilter />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </div>
      <Counter />
    </div>
  );
};

export default Home;
