import React, { useLayoutEffect, useRef, useState } from 'react';
import './css/Jumbotron.css';

const Jumbotron = ({ text, buttonText, buttonAction, backgroundImage }) => {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);
  useLayoutEffect(() => {
    const top = ref.current.getBoundingClientRect().top;
    console.log(window.scrollY + window.innerHeight / 2);
    console.log(top);
    const onScroll = () => {
      if (top < window.scrollY + window.innerHeight * 0.5) {
        // Animate.
        setVisible(true);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className='jumboWrapper d-flex flex-column align-items-center justify-content-center'
      ref={ref}
      style={{
        'backgroundImage': `url(${backgroundImage})`
      }}
    >
      <div
        className='jumboContent d-flex flex-column align-items-center justify-content-center'
        style={visible ? {} : {'opacity': 0, 'margin-top': '50px'}}
      >
          <h1 className='text-center text-light mb-3'>{text}</h1>
          {buttonText && <button className='btn btn-primary mt-4' onClick={buttonAction}>{buttonText}</button>}
      </div>
    </div>
  );
};

export default Jumbotron;
