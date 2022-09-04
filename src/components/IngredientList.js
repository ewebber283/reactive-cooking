import React from 'react'
import Ingredient from './Ingredient'
export default function IngredientList({ ingredients}) {
    return (
        <div>
            {ingredients.map(ingredient => {
                return (
                    <Ingredient key={ingredient.id} 
                    {...ingredient} 
                    />
                )
            })}
        </div>
        
      )
}
