import React, { useLayoutEffect, useRef, useState } from 'react';
import Animated from './Animated';
import '../css/Jumbotron.css';

const Jumbotron = ({ children, backgroundClass, backgroundImage }) => {
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
      className={`jumbo-wrapper d-flex flex-column align-items-center justify-content-center p-5 ${backgroundImage && 'jumbo-image'} ${backgroundClass}`}
      ref={ref}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Animated classNames='jumbo-content d-flex flex-column flex-wrap align-items-center justify-content-center' visible={visible}>
        {children}
      </Animated>
    </div>
  );
};

export default Jumbotron;
