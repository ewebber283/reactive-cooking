import React from "react";
import RecipeList from "./RecipeList";

function App() {
  return (
    <RecipeList recipes={testRecipes} />
  )
}

const testRecipes = [
  {
    id: 1,
    name: 'Chicken',
    servings: 4,
    cookTime: '30 minutes',
    instructions: '1. Pre-heat oven to 375 \n2. Season chicken \n3. Put in oven'
  },
  {
    id: 2,
    name: 'Pork',
    servings: 4,
    cookTime: '45 minutes',
    instructions: '1. Pre-heat oven to 425 \n2. Season pork \n3. Put in oven'
  }
]
export default App;
