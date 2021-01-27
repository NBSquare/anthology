import React from 'react';
import GenericModal from './GenericModal';

const Modal = ({ title, body, footer, open, onClose }) => (
  <GenericModal open={open} onClose={onClose}>
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4>{title}</h4>
          <button className='btn-close' onClick={onClose} />
        </div>
        <div className='modal-body'>{body}</div>
        <div className='modal-footer'>{footer}</div>
      </div>
    </div>
  </GenericModal>
);

export default Modal;
