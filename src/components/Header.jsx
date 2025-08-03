import React from 'react'

function Header() {
  return (
    <header className="text-center py-12 bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/50 mb-8">
      <div className="animate-float space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          Expense Tracker
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl">
          Smart way to manage your finances
        </p>
      </div>
    </header>
  )
}

export default Header
