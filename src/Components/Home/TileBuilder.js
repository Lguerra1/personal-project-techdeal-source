import React from 'react'
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <Link to={`/displays`}> <div key={props.product}>
            <h1>{props.product.product}</h1>
            <h3>{props.product.price}</h3>
            <h3>{props.product.description}</h3>
            <img width="200px" height="200px" src={props.product.image_url} alt =''></img>
        </div>
        </Link>
    )
}
