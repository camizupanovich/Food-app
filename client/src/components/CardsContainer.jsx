import React from "react";
import SingleCard from "./SingleCard";
import s from './styles/CardsContainer.module.css';

export default function CardsContainer({recipes}){
    return(
        <div className={s.container}>
            {recipes?.map((r)=>{
        return(
            <SingleCard 
            key={r.id} 
            id={r.id}
            image={r.image}
            title={r.title}
            score={r.score}
            diets={r.diets}/>
        )})}
        </div>
    )
}