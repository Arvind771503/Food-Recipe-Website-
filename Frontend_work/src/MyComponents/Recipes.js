import React from 'react'
import {RecipeItem} from './RecipeItem'

export const Recipes = (props) => {
    //console.log(props.recipes);
    return (        
        <div className="container">
            <h3 className="text-center my-3">Featured Recipe</h3>
            <div className="container">
                <div className="row">
            {
                props.recipes.length === 0 ? <p className='text-danger'>No recipe to display...</p> :
                props.recipes.map((recipe) =>{
                    //console.log(todo);
                    return <RecipeItem recipe = {recipe} key={recipe.Id}/>
                })
            }
                </div>
            </div>
           

            
        </div>
    )
}
