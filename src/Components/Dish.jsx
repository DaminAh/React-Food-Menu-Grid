import React from 'react'

const Dish = ({ dish }) => {
  return (
    <div className="dish-card">
      <img src={dish.img} alt={dish.title} className="dish-img" />
      <div className="dish-info">
        <div className="dish-title-row">
          <span className="dish-title">{dish.title}</span>
          <span className="dish-price">${dish.price}</span>
        </div>
        <div className="dish-desc">{dish.desc}</div>
      </div>
    </div>
  )
}

export default Dish
