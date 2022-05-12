import React from "react";
import s from './styles/SecondNav.module.css';

export default function SecondNav({handleSort,searchTitle,handleSearch}){
    return(
        <>
        <div className={s.first}>

           <form 
           className={s.searchContainer}
           onSubmit={searchTitle}>
               <input
                className={s.input}
                type='text' 
                placeholder="Search"
                onChange={handleSearch}/>
                <input 
                className={s.btn}
                type='submit' 
                value='🔍︎'/>
           </form>

            <div className={s.title}> LETS COOK !</div>

            <div className={s.searchContainer}>
            <span  className={`${s.btn} ${s.sort}`}>SORT</span>
            <select 
            name='sort'
            className={s.inputSelect}
            onChange={(e)=>handleSort(e.target.value)}>
                <option value='az' >A-Z</option>
                <option value='za' >Z-A</option>
                <option value='best_score' >Best score</option>
                <option vale='worst_score'>Worst score</option>
            </select></div>

        </div>
        </>
    )
}