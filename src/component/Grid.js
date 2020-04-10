import React from 'react';
import {Item} from './Item';
export const Grid = (props)=>{
    return (
        <div>
            {props.items.map((itemObject,i)=>{
            // console.log(".......",index);
            return (
            
            <Item key={itemObject.id} item={itemObject} deleteItem ={props.deleteItem}/>
            )
            })
            }

        </div>
    )
}