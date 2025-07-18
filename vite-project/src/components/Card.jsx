import React from 'react'
import './Card.css' ;
import PropTypes from 'prop-types';

function Card(props) { // all the attributes/properties are recieved here.
  return (
    <div>
        <div className='card'>
            <h2> {props.title} </h2>
            <p> {props.description} </p>
            <h4> Bye world </h4>
        </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Card.defaultProps = {
  title: "Guest",
  description: "Empty",
}

export default Card
