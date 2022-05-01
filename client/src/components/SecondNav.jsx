import React from "react";
import Search from "./Search";
import Sort from "./Sort";
import Pagination from './Pagination';
import s from './styles/SecondNav.module.css';

export default function SecondNav(){
    return(
        <>
        <div className={s.first}>
        <Search/>
        <Sort/>
        </div>
        </>
    )
}