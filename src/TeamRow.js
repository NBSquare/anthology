import React, { useLayoutEffect, useRef, useState } from 'react';
import Animated from './components/Animated';
import Member from './components/Member';

const TeamRow = () => {
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
    <div className='row' ref={ref}>
      <Animated visible={visible}>
        <div className="card mb-3">FooBarBaz</div>
      </Animated>
    </div>
  )
};

export default TeamRow;