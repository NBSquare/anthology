import React, { useLayoutEffect, useRef, useState } from 'react';
import './css/Jumbotron.css';

const Jumbotron = ({ children, text, backgroundImage }) => {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);
  useLayoutEffect(() => {
    const top = ref.current.getBoundingClientRect().top;
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
      className='jumboWrapper d-flex flex-column align-items-center justify-content-center p-5'
      ref={ref}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className='jumboContent d-flex flex-column align-items-center justify-content-center'
        style={visible ? {} : {'opacity': 0, 'marginTop': '50px'}}
      >
        {children}
      </div>
    </div>
  );
};

export default Jumbotron;
