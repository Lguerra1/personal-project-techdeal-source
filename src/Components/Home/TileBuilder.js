import React from 'react'


export default (props) => {
    return (
        <div key={props.product}>
            <div> <h4>{props.product.product}</h4></div>
            <div><h4>{props.product.description}</h4></div>
            <div><img width="250px" height="250px" src={props.product.image_url} alt=''></img></div>
            <div> <h4>Price: {props.product.price}</h4></div>
        </div>

    )
}
