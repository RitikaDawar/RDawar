import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
import './Item.css';

export const Item = (props)=>{
    return (
        <>
        <div className="list">
            
        
    <p>{props.item.id} {props.item.taskname} {props.item.taskdate}
        <span>
       {/* <button onClick={() => {
            props.deleteItem(props.item.id)}}>Delete</button> */}
       <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(props.item.id)}} icon="trash" />
       </span>
    </p>
    </div>
        {/* <img src={props.item.url}/> */}
        {/* {console.log(props.li)} */}
        {/* {props.item.isAdded?<button onClick={()=>{props.toggleBtn(props.li)}}>Remove from Cart</button>:<button onClick={()=>{props.toggleBtn(props.li)}}>Add to Cart</button>} */}
        
        </>
    )
}