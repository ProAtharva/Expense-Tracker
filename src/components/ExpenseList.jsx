import React from 'react'

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-primary">Expense List</h2>
      <div className="space-y-4">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 group"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                  {expense.title}
                </h3>
                <div className="text-sm text-muted-foreground mt-1 flex items-center gap-2 flex-wrap">
                  <span className="capitalize bg-primary/10 px-2 py-1 rounded-full text-primary">
                    {expense.category}
                  </span>
                  <span className="capitalize bg-secondary/10 px-2 py-1 rounded-full text-secondary">
                    {expense.paymentMode}
                  </span>
                  <span>•</span>
                  <span>{new Date(expense.date).toLocaleDateString('en-IN')}</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xl font-semibold text-primary">
                  ₹{expense.amount.toLocaleString('en-IN')}
                </span>
                <button
                  onClick={() => onDeleteExpense(expense.id)}
                  className="text-destructive hover:text-destructive/80 transition-colors p-2 hover:bg-destructive/10 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
        {expenses.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-muted/20 rounded-xl border border-border/50">
            <p className="text-muted-foreground text-lg">
              No expenses added yet. Start tracking your spending!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExpenseList