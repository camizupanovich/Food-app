import React from "react";
import Search from "./Search";
import Sort from "./Sort";
import s from './styles/SecondNav.module.css';

export default function SecondNav({handleSort,searchTitle,handleSearch}){
    return(
        <>
        <div className={s.first}>
        <Search searchTitle={searchTitle} handleSearch={handleSearch}/>
        <div className={s.title}> Lets Cook !</div>
        <Sort handleSort={handleSort}/>
        </div>
        </>
    )
}