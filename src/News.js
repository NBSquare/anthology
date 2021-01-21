import React from 'react';
import Card from './components/Card';
import profile from './media/profile.jpg';

const News = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Card
        title={`Nathan's got a great new idea`}
        description={`He's so good at making new content`}
        date={`Posted Jan. 13`}
        image={profile}
      />
    </div>
  )
};

export default News;