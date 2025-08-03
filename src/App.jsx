import { useState, useEffect } from 'react'
import Header from './components/Header'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseChart from './components/ExpenseChart'

function App() {
  const [expenses, setExpenses] = useState([])
  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark')
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-purple-50/80 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="theme-toggle"
        aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="space-y-8">
            <div className="glass-morphism rounded-2xl p-6 card-hover">
              <ExpenseForm onAddExpense={addExpense} />
            </div>
            <div className="glass-morphism rounded-2xl p-6 card-hover">
              <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
            </div>
          </div>
          <div className="glass-morphism rounded-2xl p-6 card-hover h-fit">
            <ExpenseChart expenses={expenses} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
