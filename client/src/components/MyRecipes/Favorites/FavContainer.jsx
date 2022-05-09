//extern modules
import React from "react";
import { useState } from "react";
//intern modules
import ErrorFavList from "./ErrorFavList";
import FavCard from "./FavCard";
import s from '../../styles/FavContainer.module.css';

export default function FavContainer({favRecipes}){
        //paginado
        const [page,setPage] = useState(1);
        const [prev,setPrev] = useState(0);
        const [next,setNext] = useState(1);
        let recipesPerPage = 3 ;
        const LastRecipe = page * recipesPerPage; //position[9] on current page
        const FirstRecipe = LastRecipe - recipesPerPage; //position[1] on current page
        const currentPage = favRecipes.slice(FirstRecipe,LastRecipe); //array of 9 recipes  */
        let showLastPage = Math.ceil(favRecipes.length/recipesPerPage);
        const handlePrev = (e)=>{
            if(favRecipes.length<1)setPrev(0);
            if(page<2)setPrev(0);
            else{setPage(page-1);
            setPrev(1);
            setNext(1)}
        }
        const handleNext = (e)=>{
            if(favRecipes.length<1)setNext(0);
            if(page===showLastPage){
                return setNext(0);
            }else{
                setPage(page+1);
                setPrev(1);
                setNext(1);
            }
        }
    return(
        <div className={s.container}>
            <div className={s.title}>Wish List</div>
            {
        currentPage.length < 1?
        ( <ErrorFavList/>
        ) :
        currentPage.map((r)=>{
        return(
            <FavCard 
            key={r.id} 
            id={r.id}
            image={r.image}
            title={r.title}/>
        )
    })
    }
            {favRecipes.length > 4 && prev?
            <button 
            className={`${s.btn} ${s.btnPrev}`} 
            onClick={handlePrev}>⟨</button> : 
            null}
            {favRecipes.length > 1 && next?
            <button className={`${s.btn} ${s.btnNext}`} 
            onClick={handleNext}>⟩</button> : 
            null}
        </div>
    )
}