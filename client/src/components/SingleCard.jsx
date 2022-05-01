import React from "react";
import {Link} from 'react-router-dom';
import s from './styles/SingleCard.module.css';

export default function SingleCard(props){
    return(
        <div className={s.card}>
            <img className={s.img} src={props.image} alt={props.title}/>
            <div className={s.title}>{props.title.toUpperCase()}</div>
            <div className={s.score}>{`★ ${props.score} Pts. `}</div>
            <div className={s.listcontainer}>
            {props.diets?.map((diets,i)=>(
                <span key={i} className={s.listContent}>| {diets} </span>
            ))}
            </div>
            <Link to='/recipes/:id' className={s.detail}>lets cook ! </Link>
        </div>
    )
}