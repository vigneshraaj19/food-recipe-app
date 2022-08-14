import { CardContent } from '@mui/material';
import React from 'react'
import Card from '@mui/material/Card';
import "./RecipeTile.css"

export  function RecipeTile({recipe}) {

    const getdata = async () => {
        console.log("vigneshraaj");
    }
   
  return (
 
<Card className='card'>
<img 
 className="card__image"
 src={recipe["recipe"]["image"]}
 alt="images"
 />
 <CardContent>
  <div className='card__title'>
    <span>{recipe["recipe"]["label"]}</span>
    </div>
    <button className="card__btn"onClick={getdata}>Show Recipe</button>
    </CardContent>
     

</Card> 

    );
}
