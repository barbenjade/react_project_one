import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItems'
import ExpenseShow from './components/Expenses/ExpenseShow'
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const expenses = [
    {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {id: 'e3', title: 'Car Insurance', amount: 284.23, date: new Date(2019, 7, 6) }
  ]
  return (
    <div className="App">
      <NewExpense />  
      <ExpenseShow expenses = {expenses} />
    </div>
  );
}

export default App;
