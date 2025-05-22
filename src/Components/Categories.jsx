import React from 'react'

const Categories = ({
  changeCategory,
  showAllItems,
  recepies,
  currentCategory,
}) => {
  // Get unique categories from recepies
  const categories = ['all', ...new Set(recepies.map((item) => item.category))]
  // Get current category from props or context if needed

  // You may need to pass the current category as a prop from App.jsx for highlighting
  // For now, let's assume you add a 'currentCategory' prop

  return (
    <div className="categories-bar">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={
            category === 'all' ? showAllItems : () => changeCategory(category)
          }
          className={`category-btn${
            currentCategory === category ? ' active' : ''
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default Categories
