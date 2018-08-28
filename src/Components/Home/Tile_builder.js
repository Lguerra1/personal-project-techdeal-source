import React from 'react'
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <Link to={`/displays/${props.product.product_id}`}> <div key={props.product.product_id}>
            <h1>{props.product.product}</h1>
            <h3>{props.product.price}</h3>
            <img src={props.product.image_url}></img>
        </div>
        </Link>
    )
}
