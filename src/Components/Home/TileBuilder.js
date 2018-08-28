import React from 'react'
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <Link to={`/displays/${props.product.product_id}`}> <div key={props.product.product_id}>
            <h1>{props.product.product}</h1>
            <h3>{props.product.price}</h3>
            <h3>{props.product.description}</h3>
            <img width="200px" height="200px" src={props.product.image_url} alt =''></img>
        </div>
        </Link>
    )
}
