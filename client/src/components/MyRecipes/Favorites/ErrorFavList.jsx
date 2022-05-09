import React from "react";
import s from '../../styles/ErrorFavList.module.css'

export default function ErrorFavList(){
    return(
        <>
        <div className={s.heart}>💔</div>
        <div className={s.text}> You haven't recipes added to your wish list</div>
        </>
    )
}