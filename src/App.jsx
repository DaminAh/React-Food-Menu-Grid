import React from 'react'
import data from './data.js'
//css
import './App.css'
//Components
import Title from './Components/Title'
import Categories from './Components/Categories'
import Dishes from './Components/Dishes.jsx'

const App = () => {
  //state variables
  const [category, setCategory] = React.useState('all')
  const [showAll, setShowAll] = React.useState(true)
  //event handlers
  const changeCategory = (category) => {
    setCategory(category)
    setShowAll(false)
  }
  const showAllItems = () => {
    setShowAll(true)
    setCategory(category)
  }

  return (
    <main className="App">
      <Title />
      <Categories
        changeCategory={changeCategory}
        showAllItems={showAllItems}
        recepies={data}
        currentCategory={showAll ? 'all' : category}
      />
      <Dishes
        recepies={
          showAll ? data : data.filter((item) => item.category === category)
        }
      />
    </main>
  )
}
export default App
