import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Modal as bsModal} from 'bootstrap';

const Modal = ({ title, body, footer, open, onClose }) => {
  const [modal, setModal] = useState(undefined);
  const ref = useRef(null);

  useLayoutEffect(() => {
    ref.current.addEventListener('hidden.bs.modal', onClose);
  }, [onClose]);

  useLayoutEffect(() => {
    const modal = new bsModal(ref.current);
    setModal(modal);
  }, []);

  useEffect(() => {
    if (!modal) return;
    if (open) {
      modal.show();
    } else {
      console.log('trigger')
      modal.hide();
    }
  }, [modal, open]);

  return (
    <div className='modal fade' tabIndex={-1} ref={ref}>
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
    </div>
  )
};

export default Modal;
