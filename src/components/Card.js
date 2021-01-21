import React from 'react';
import '../css/Card.css';

const Card = ({ title, description, date, image }) => {
  return (
    <div className='card mb-3'>
      <div className='row g-0'>
        <img id='cardPhoto' className='col-md-4' src={image} alt='' />
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <p className='card-text'><small className='text-muted'>{date}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Card;