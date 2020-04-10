
import React from 'react';
import './Search.css';

export const Search = (props)=>{
    return (
        <>
        <div class= "search">
        <input type = "text"  placeholder ="Search" onChange={props.searchstr}></input>
        </div>
        </>
    )
}