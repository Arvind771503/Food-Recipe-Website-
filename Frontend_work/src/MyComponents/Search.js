import React from 'react'
import {RecipeItem} from './RecipeItem'

export default function Search({setInput}) {
    return (
        <>

        
            <div className ="container p-5">
                  <h1 className="text-center my-3 text-danger">FOOD RECIPE</h1>
                        <input className="form-control me-3" type="search" placeholder="Search your favourite food"/>
                      </div>
                    <hr/>
                    </>
    )
}
