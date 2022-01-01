import React from 'react'

export const RecipeItem = ({ recipe }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4 my-2">
                    <img src={recipe.Image} className="img-fluid rounded-start" alt="Sorry can't load Image"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{recipe.Name}</h5>
                        <h6 className="card-title">Ingredients:</h6>
                        <p className="card-text"><pre>{recipe.Ingredients}</pre></p>
                        <h6 className="card-title">Recipe:</h6>
                        <p className="card-text"><small className="text-muted"><pre>{recipe.Description}</pre></small></p>
                        <h6 className="card-title"><a href={recipe.Video}>Watch video here</a></h6> 
                    </div>
                </div>
            </div>
        </div>
    )
}
