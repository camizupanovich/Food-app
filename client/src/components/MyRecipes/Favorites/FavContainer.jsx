//extern modules
import React from "react";
import { useState } from "react";
//internmodule
import ErrorFavList from "./ErrorFavList";
import FavCard from "./FavCard";
import s from '../../styles/FavContainer.module.css';

export default function FavContainer({favRecipes}){
        //paginado
        const [page,setPage] = useState(0);
        const currentPage = favRecipes.slice(page,page+1); 

        const handlePrev = (e)=>{
            if(page>0)
            setPage(page-1)
        }
        const handleNext = (e)=>{
            if(page<favRecipes.length-1)
            setPage(page +1)
        }
        
    return(
        <div className={s.container}>
            <div className={s.title}>Wish List</div>
            {
        favRecipes.length < 1?
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
            {page>0?
            <button 
            className={`${s.btn} ${s.btnPrev}`} 
            onClick={handlePrev}>⟨</button> : null }
            <div>{page+1}</div>
            {page< favRecipes.length-1?
            <button className={`${s.btn} ${s.btnNext}`} 
            onClick={handleNext}>⟩</button> :null }
        </div>
    )
}