import React from 'react'
import Dish from './Dish'
const Dishes = ({ recepies }) => {
  return (
    <div className="dishes-grid">
      {recepies.map((item) => (
        <Dish key={item.id} dish={item} />
      ))}
    </div>
  )
}

export default Dishes
