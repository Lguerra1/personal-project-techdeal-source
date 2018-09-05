import React from 'react'


export default (props) => {
    return (
         <div key={props.product}>
            <h4>{props.product.product}</h4>
            <h4>Price: {props.product.price}</h4>
            <h4>{props.product.description}</h4>
            <img width="150px" height="150px" src={props.product.image_url} alt =''></img>
        </div>
        
    )
}
