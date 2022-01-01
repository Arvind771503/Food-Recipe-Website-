
import './App.css';
import Header from './MyComponents/Header';

import { Recipes } from './MyComponents/Recipes';
import {useEffect, useState} from 'react';
import Axios from 'axios';

function App() {

  const [recipesList, setRecipesList] = useState([]);
  const [input, setInput]= useState(' ')
  const[output,setOutput]=useState([])

 // useEffect(()=>{
 //   Axios.get("http://localhost:3006/api/food/").then((resp)=>{
   //     setRecipesList(resp.data);
     // }).catch(()=>{
      //  console.log("Error");
     // })
  //}, []);
  useEffect(()=> {
    async function getData(){
      const res = await Axios.get("http://localhost:3006/api/food/")
      setRecipesList(res.data);
      setOutput(res.data);
      console.log(res.data);
    }
    getData()
  },
 [] ) 

  useEffect(()=>{
setOutput([])
recipesList.filter(val=> {
  if(val.Name.toLowerCase().includes(input.toLowerCase())){
    setOutput(output=>[...output,val])
  }
})
  },[input]
  )

const myTitle = "Food Recipe";

  return (
    <>     
    <Header title= {myTitle} /> 
    <div className ="container p-5">
    <h1 className="text-center my-3 text-danger "><big>FOOD RECIPE</big></h1>                      
        <input className="form-control me-3" onChange={e=>setInput(e.target.value)} type="text" placeholder="Search your favourite food"/>
    </div>
    <Recipes recipes={output} />       
    </>
  );
}

export default App;
