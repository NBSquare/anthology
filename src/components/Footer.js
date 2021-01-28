import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <div
      className='bg-dark d-flex flex-wrap align-items-center justify-content-center'
      id='pageFooter'
    >
      <span id='copyright' className='text-light text-center'>&copy;2021 Tisbert Sketch Comedy</span>
      <a href='https://facebook.com/TisbertSketchComedy/'>
        <i className='bi bi-facebook text-light' />
      </a>
      <a href='https://instagram.com/tisbertcomedy'>
        <i className='bi bi-instagram text-light' />
      </a>
      <a href='https://discord.gg/eEnjpdE'>
        <i className='bi bi-discord text-light' />
      </a>
    </div>
  );
};

export default Footer;
