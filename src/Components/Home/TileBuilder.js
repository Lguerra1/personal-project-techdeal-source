import React from 'react'


export default (props) => {
    return (
         <div key={props.product}>
            <h5>{props.product.product}</h5>
            <h5>{props.product.price}</h5>
            <h5>{props.product.description}</h5>
            <img width="150px" height="150px" src={props.product.image_url} alt =''></img>
        </div>
        
    )
}
