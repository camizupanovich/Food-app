import React from "react";

export default function Sort({handleSort}){
    return(
        <div>
           <span>Sort by...</span>
            <select onChange={(e)=>handleSort(e.target.value)}>
                <option value='az' >A-Z</option>
                <option value='za' >Z-A</option>
                <option value='best_score' >Best score</option>
                <option vale='worst_score'>Worst score</option>
            </select>
        </div>
    )
}