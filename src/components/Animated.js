import React from 'react';
import '../css/Animated.css';

const Animated = ({ children, classNames, visible }) => (
    <div className={`animated ${classNames}`} style={visible ? {} : { opacity: 0, marginTop: '50px' }}>
      {children}
    </div>
);

export default Animated;