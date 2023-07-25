import Layout from "../layouts/Layout";
import { useState, useEffect } from 'react'
import StatusComponent from '../components/StatusComponent'

const ExpensePage = () => {
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [income, setIncome] = useState([])
  const [balanceAmount, setBalanceAmount] = useState(0)

  useEffect(() => {
    // Retrieve expense data from local storage if available
    const savedExpenses = JSON.parse(localStorage.getItem('expenses'))
    if (savedExpenses) {
      setExpenses(savedExpenses)
    }

    // Retrieve income data from local storage if available
    const savedIncome = JSON.parse(localStorage.getItem('income'))
    if (savedIncome) {
      setIncome(savedIncome)
    }
  }, [])

  const handleAddExpense = () => {
    const newExpense = {
      date,
      category,
      title,
      amount,
    }
    setExpenses([...expenses, newExpense])
    setCategory('')
    setTitle('')
    setAmount(0)
  }

  // Calculate the total expense amount
  const calculateExpenseStatus = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0)
  }

  // Calculate the total income amount
  const calculateIncomeStatus = () => {
    return income.reduce((total, income) => total + income.amount, 0)
  }

  // Calculate the balance amount
  const calculateBalanceAmount = (income, expenses) => {
    const totalIncome = income.reduce(
      (total, incomeItem) => total + incomeItem.amount,
      0
    )
    const totalExpenses = expenses.reduce(
      (total, expenseItem) => total + expenseItem.amount,
      0
    )
    return totalIncome - totalExpenses
  }


  useEffect(() => {
    // Update local storage whenever expenses change
    localStorage.setItem('expenses', JSON.stringify(expenses))

    // Calculate and update balance amount
    const updatedBalanceAmount = calculateBalanceAmount(income, expenses)
    setBalanceAmount(updatedBalanceAmount)
    localStorage.setItem('balance', updatedBalanceAmount.toString())
  }, [income, expenses])

  return (
    <>
      <Layout>
        <div className='container mx-auto'>
          <div className=' flex flex-col justify-center items-center '>
            <h1 className='mt-10 text-center text-2xl font-bold mb-5'>
              My Expense Details
            </h1>
            <StatusComponent
              incomeStatus={calculateIncomeStatus()}
              expenseStatus={calculateExpenseStatus()}
              balanceAmount={balanceAmount}
            />
          </div>
        </div>
        {/* input area */}
        <div className='container mx-auto flex justify-center mt-10'>
          <div className='lg:join'>
            <div>
              <div>
                <input
                  type='date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className='input input-bordered join-item'
                />
              </div>
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='select select-bordered join-item'
            >
              <option disabled value=''>
                Your expense sources
              </option>
              <option value='rent'>Rent</option>
              <option value='bills'>Bills</option>
              <option value='food'>Food</option>
              <option value='transportation'>Transport</option>
              <option value='entertainment'>Entertainment</option>
              <option value='travel'>Travel</option>
              <option value='gift'>Gift</option>
            </select>
            <div>
              <div>
                <input
                  type='text'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className='input input-bordered join-item'
                  placeholder='Item details'
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  type='number'
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  className='input input-bordered join-item'
                  placeholder='Amount'
                />
              </div>
            </div>
            <button onClick={handleAddExpense} className='btn join-item'>
              Add
            </button>
          </div>
        </div>
        {/* display area */}
        <div className='container mx-auto mt-10'>
          <div className='overflow-x-auto'>
            <table className='table'>
              {/* head */}
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{expense.date}</td>
                    <td>{expense.category}</td>
                    <td>{expense.title}</td>
                    <td>${expense.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  )
};

export default ExpensePage;