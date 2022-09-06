import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import '../css/app.css';
import uuidv4 from 'uuid/v4';

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'reactiveCooking.recipes'

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(() => { 
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON == null) {
      return testRecipes
    } else {
      return JSON.parse(recipeJSON)
    }
  })
  
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])


  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeEdit
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs' }
      ]
    }

    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeEdit(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  )
}


const testRecipes = [
  {
    id: 1,
    name: 'Chicken',
    servings: 4,
    cookTime: '30 minutes',
    instructions: '1. Pre-heat oven to 375 \n2. Season chicken \n3. Put in oven',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 tbsp'
      }
    ]
  },
  {
    id: 2,
    name: 'Pork',
    servings: 4,
    cookTime: '45 minutes',
    instructions: '1. Pre-heat oven to 425 \n2. Season pork \n3. Put in oven',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 tbsp'
      }
    ]
  }
]
export default App;
