import React from 'react'
import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale)

function ExpenseChart({ expenses }) {
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount
    return acc
  }, {})

  const data = {
    labels: Object.keys(categoryTotals).map(category => category.charAt(0).toUpperCase() + category.slice(1)),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 2,
        hoverOffset: 8
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: 'Expenses by Category',
        font: {
          size: 20,
          weight: 'bold'
        },
        padding: 20,
        color: '#6b7280'
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw
            const total = context.dataset.data.reduce((a, b) => a + b, 0)
            const percentage = ((value / total) * 100).toFixed(1)
            return `₹${value.toLocaleString('en-IN')} (${percentage}%)`
          }
        }
      }
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }

  const totalExpense = Object.values(categoryTotals).reduce(
    (sum, amount) => sum + amount,
    0
  )

  return (
    <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/50">
      <h2 className="text-2xl font-semibold mb-6 text-primary">Expense Analysis</h2>
      {expenses.length > 0 ? (
        <>
          <div className="mb-8 bg-primary/5 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2 text-foreground/80">Total Expenses</h3>
            <p className="text-4xl font-bold text-primary">
              ₹{totalExpense.toLocaleString('en-IN')}
            </p>
          </div>
          <div className="aspect-square max-w-xl mx-auto">
            <Pie data={data} options={options} />
          </div>
        </>
      ) : (
        <div className="text-center py-12 bg-muted/20 rounded-lg">
          <p className="text-muted-foreground text-lg">Add some expenses to see the analysis</p>
        </div>
      )}
    </div>
  )
}

export default ExpenseChart