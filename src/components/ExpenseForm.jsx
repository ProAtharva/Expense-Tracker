import React, { useState } from 'react'

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: 'other',
    paymentMode: 'cash'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title || !formData.amount) return

    onAddExpense({
      ...formData,
      amount: parseFloat(formData.amount),
      date: new Date().toISOString()
    })

    setFormData({ title: '', amount: '', category: 'other', paymentMode: 'cash' })
  }

  return (
    <div className="bg-white dark:bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-border/50">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
        Add New Expense
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title Input */}
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full p-3 rounded-lg bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent border border-gray-200 dark:border-gray-600"
            placeholder="Enter expense title"
          />
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
            <input
              type="number"
              id="amount"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full p-3 pl-8 rounded-lg bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent border border-gray-200 dark:border-gray-600"
              placeholder="0.00"
              min="0"
              step="1"
            />
          </div>
        </div>

        {/* Category Dropdown */}
        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full p-3 rounded-lg bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent border border-gray-200 dark:border-gray-600"
          >
            <option value="groceries">🛒 Groceries</option>
            <option value="transport">🚗 Transport</option>
            <option value="entertainment">🎮 Entertainment</option>
            <option value="utilities">🏠 Utilities</option>
            <option value="healthcare">⚕️ Healthcare</option>
            <option value="education">📚 Education</option>
            <option value="shopping">🛍️ Shopping</option>
            <option value="dining">🍽️ Dining Out</option>
            <option value="investment">📈 Investment</option>
            <option value="other">📦 Other</option>
          </select>
        </div>

        {/* Payment Mode Dropdown */}
        <div className="space-y-2">
          <label htmlFor="paymentMode" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Payment Mode
          </label>
          <select
            id="paymentMode"
            value={formData.paymentMode}
            onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })}
            className="w-full p-3 rounded-lg bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent border border-gray-200 dark:border-gray-600"
          >
            <option value="cash">💵 Cash</option>
            <option value="upi">📱 UPI</option>
            <option value="card">💳 Card</option>
            <option value="netbanking">🏦 Net Banking</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 mt-6 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-lg hover:opacity-90 transition-opacity focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Expense
        </button>
      </form>
    </div>
  )
}

export default ExpenseForm
