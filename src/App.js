import './App.css';
import{YOUR_APP_ID,YOUR_APP_KEY} from './key.js';
import React, { useState } from "react";
import axios from "axios";
import {RecipeTile} from "./RecipeTile";

function App() {
  const [recipes,setrecipes]=useState([]);
  const[searchTerm,setSearchTerm] = useState("");

  var url=`https://api.edamam.com/search?q=&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;
  console.log(url);


  const getRecipies = async () => {
    const response = await axios({
        method: 'get',
        url: url
    });
    setrecipes(response.data.hits);
    console.log(response.data);
}
getRecipies();
 const onSubmit=(e) =>{
  e.preventDefault();
  
 }
  return (
    <div className="app">
     <h1 >Food Recipe Plaza 🍔</h1>
     <form className="app__searchForm" onSubmit={onSubmit}>
      <input type="text" className="app__input" placeholder='Enter Recipe'
       onChange={(event) => setSearchTerm(event.target.value) }
      />
      <input className='app__submit' type="submit" value="search" />
     </form>
     <div className="app__recipes">
      {recipes.filter((recipe)=>{
        if(searchTerm ==""){
          return recipe
        }else if(
          recipe["recipe"]["label"].toLowerCase().includes(searchTerm.toLowerCase())){
               return recipe
          }
        
      }).map(recipe =>{
            return <RecipeTile recipe={recipe}/>
          })}
     </div>
    </div>
  );
}

export default App;
