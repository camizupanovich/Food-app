import React from "react";
import {useSelector } from "react-redux";
import CardsContainer from "./CardsContainer";
import FavContainer from "./FavContainer";

export default function MyRecipes(){
    const favRecipes =useSelector((state)=>state.favRecipes);
    const recipes = useSelector((state)=>state.myRecipes);
    return(
        <div>
            <FavContainer favRecipes={favRecipes}/>
            {recipes&&
             <CardsContainer recipes={recipes}/>}
        </div>
    )
}