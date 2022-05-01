import React from "react";
import { Link } from "react-router-dom";
//import Search from './Search'
import s from './styles/NavBar.module.css';

export default function NavBar(){
    return(
        <div className={s.nav}>
        <Link to='/recipes' className={s.link}>Home</Link>
        <Link to='/myrecipes' className={s.link}>My recipes</Link>
        <Link to='/create' className={s.link}>Create</Link>
        </div>
    )
}