import React from "react";
import { Link } from "react-router-dom";
import s from './styles/NotFound.module.css';

export default function NotFound(){
    return(
        <div className={s.container}>
            <div className={s.title}>RECIPES NOT FOUND</div>
            <div className={s.symbol}>⚠</div>
            <Link to='/create' className={s.link}><button className={s.btn}>Lets CREATE !</button></Link>
        </div>
    )
}