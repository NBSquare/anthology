import React, { useLayoutEffect, useRef, useState } from 'react';
import Animated from './Animated';
import Member from './Member';

const TeamRow = ({ classNames, members }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  
  useLayoutEffect(() => {
    const top = ref.current.getBoundingClientRect().top;
    const onScroll = () => {
      if (top < window.scrollY + window.innerHeight * 0.75) {
        // Animate.
        setVisible(true);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={classNames} ref={ref}>
      <Animated classNames='row mb-5' visible={visible}>
        {members.map((member) => (
          <Member name={member.name} title={member.title} picture={member.picture} />
        ))}
      </Animated>
    </div>
  )
};

export default TeamRow;