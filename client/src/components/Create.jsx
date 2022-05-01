import React from "react";
import s from './styles/Create.module.css';

export default function Create(){
    return(
        <div className={s.container} >
        <form className={s.formcontainer}>
            <div className={s.box1}>
                <label htmlFor='title'>Title</label>
                <input className={s.margin} type='text' name='title' placeholder="title.."/>
                <label>Summary</label>
                <textarea className={s.margin} type='text' name='summary' placeholder="Describe your recipe"/>
                <div className={`${s.column} ${s.margin}`}>
                   <label className={s.scoretext}>Score</label>
                   <input className={s.scoretext} type='number'/>
                   <label className={s.scoretext}>Health Score</label>
                   <input className={s.scoretext} type='number'/>
                </div>
                <label>How to make your recipe?</label>
                <textarea className={s.margin} placeholder="Please, describe the steps..."/>
                <input className={s.margin} type='text' placeholder="Take a pic and paste here"/>
            </div>
            <div className={s.box2}>
                <label>select diets</label>
            </div>
        </form>
        </div>
    )
}