//extern modules
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";
//intern modules
import { getMyRecipes } from '../../redux/actions';
import CardsContainer from "../CardsContainer";
import FavContainer from "./Favorites/FavContainer";
import Pagination from "../Pagination";
import s from '../styles/MyRecipes.module.css';

export default function MyRecipes(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getMyRecipes())
    },[dispatch])
    const favRecipes =useSelector((state)=>state.favRecipes);
    const recipes = useSelector((state)=>state.myRecipes);
    const [page,setPage] = useState(1);
    let recipesPerPage = 9 ;
    const LastRecipe = page * recipesPerPage; //position[9] on current page
    const FirstRecipe = LastRecipe - recipesPerPage; //position[1] on current page
    const currentPage = recipes.slice(FirstRecipe,LastRecipe); //array of 9 recipes  */
    const handlePaginate = (pageNumber) => {
       setPage(pageNumber);
    };
    return(
        <>
        <div className={s.container}>
            <FavContainer favRecipes={favRecipes}/>
            {recipes&&
             <CardsContainer recipes={currentPage}/>}
        </div>
            <Pagination
             recipes={recipes.length} 
             recipesPerPage={recipesPerPage} 
             handlePaginate={handlePaginate}/>
        </>
    )
}