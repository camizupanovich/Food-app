import React from "react";

export default function Search({searchTitle,handleSearch}){
    return(
        <>
        <form onSubmit={searchTitle}>
            <input 
            type='text' 
            placeholder="Search"
            onChange={handleSearch}/>
            <input type='submit' value='🔍︎'/>
        </form>
        </>
    )
}