import React from 'react';
import '../css/Member.css';

const Member = ({ name, title, picture }) => (
  <div className='col-sm mb-3 d-flex flex-column align-items-center'>
    <img src={picture} alt='' className='mb-2 profile'/>
    <h4>{name}</h4>
    <h5>{title}</h5>
  </div>
);

export default Member;