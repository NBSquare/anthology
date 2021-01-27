import { Carousel as bsCarousel } from 'bootstrap';
import React, { useLayoutEffect, useRef, useState } from 'react';
import Jumbotron from './components/Jumbotron';
import Modal from './components/Modal';
import VideoModal from './components/VideoModal';
import './css/Streaming.css';
import image from './media/placeholderfeature.jpg';
import titles from './Titles';

const TitleCards = ({ titles }) => (
  <div className='d-flex'>
    {titles.map((title) => (
      <div className='card mx-2'>
        <img src={title.image} alt='' className='card-img-top' />
        <div className='card-body'>
          <h4>{title.name}</h4>
          <button className='btn btn-primary'>
            <span className='display-font'>WATCH NOW</span>
            <i className='ps-2 bi bi-play-btn' />
          </button>
        </div>
      </div>
    ))}
  </div>
);

const TitleCarousel = ({ id, category, titleGroups }) => {
  const [carousel, setCarousel] = useState(undefined);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const carousel = new bsCarousel(ref.current, { interval: 0 });
    setCarousel(carousel);
  }, []);

  return (
    <div className='title-carousel pb-5 pt-3'>
      <div id={id} className='carousel slide' ref={ref}>
        <div className='container'>
          <div className='row py-4'>
            <h3 className='text-light col-8'>{category}</h3>
            <ol className='carousel-indicators col-4'>
              {titleGroups.map((_titleGroup, index) => (
                <li
                  onClick={() => carousel.to(index)}
                  className={index === 0 && 'active'}
                />
              ))}
            </ol>
          </div>
        </div>
        <div className='carousel-inner'>
          {titleGroups.map((titleGroup, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <TitleCards titles={titleGroup} />
            </div>
          ))}
        </div>
        <a
          className='carousel-control-prev'
          href={`#${id}`}
          role='button'
          onClick={() => carousel.prev()}
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href={`#${id}`}
          role='button'
          onClick={() => carousel.next()}
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </a>
      </div>
    </div>
  );
};

const Streaming = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [modalPicture, setModalPicture] = useState(undefined);

  const openModal = (title, description, picture) => {
    setModalOpen(true);
    setModalTitle(title);
    setModalDescription(description);
    setModalPicture(picture);
  };

  const featuredTitle = 'The Haunting of Tisbert';
  const featuredDescription = `Joshua Cagan's greatest artistic endeavor to date, The Haunting of Tisbert details our fear of failure in contemporary society.`;
  const featuredImage = image;

  return (
    <>
      <Jumbotron backgroundImage={featuredImage}>
        <div className='full-width'>
          <h2 className='text-light half-height'>{featuredTitle}</h2>
          <button
            className='btn btn-light'
            onClick={() =>
              openModal(featuredTitle, featuredDescription, featuredImage)
            }
          >
            <span className='display-font'>WATCH NOW</span>
            <i className='ps-2 bi bi-play-btn' />
          </button>
        </div>
      </Jumbotron>
      <div className='bg-dark'>
        <TitleCarousel
          id='recommend'
          category='Recommended For You'
          titleGroups={titles}
        />
        <TitleCarousel
          id='lifestyle'
          category='Lifestyle'
          titleGroups={titles}
        />
        <TitleCarousel
          id='thrills'
          category='High-Octane Thrills'
          titleGroups={titles}
        />
      </div>

      <VideoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        description={modalDescription}
        picture={modalPicture}
      />
    </>
  );
};

export default Streaming;
