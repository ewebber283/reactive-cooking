import React, { useState } from "react";
import RecipeList from "./RecipeList";
import '../css/app.css'
import uuidv4 from 'uuid/v4'
function App() {
  const [recipes, setRecipes] = useState(testRecipes)
  return (
    <RecipeList recipes={recipes} 
    handleRecipeAdd={handleRecipeAdd}
    handleRecipeDelete={handleRecipeDelete}/>
  )

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'test',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instruct',
      ingredients: [
        { id: uuidv4(), name: 'name', amount: '1 tsp'}
      ]
    }
  
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    //get all recipes that is not recipe with id and set to current recipes
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }
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
