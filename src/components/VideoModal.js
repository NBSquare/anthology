import React from 'react';
import GenericModal from './GenericModal';
import Jumbotron from './Jumbotron';
import '../css/VideoModal.css';

const VideoModal = ({ open, onClose, title, description, picture }) => (
  <GenericModal open={open} onClose={onClose}>
    <div className='video-modal modal-dialog modal-xl'>
      <div className='modal-content'>
        <div className='modal-header'>
          <button className='btn-close' onClick={onClose} />
        </div>
        <div className='modal-body'>
          <Jumbotron backgroundImage={picture}>
            <div className='full-width'>
              <h2 className='text-light half-height'>{title}</h2>
              <h5 className='text-light half-width'>{description}</h5>
            </div>
          </Jumbotron>
        </div>
        <div className='modal-footer'>
          <h5 className='me-3'>This content is currently locked behind a paywall. Please pay 1000 Tisbucks to continue.</h5>
          <button className='btn btn-success'>Pay <i className='bi bi-cash' /> 1000</button>
        </div>
      </div>
    </div>
  </GenericModal>
);

export default VideoModal;