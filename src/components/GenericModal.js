import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Modal as bsModal } from 'bootstrap';

const GenericModal = ({ open, onClose, children }) => {
  
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
      console.log('trigger');
      modal.hide();
    }
  }, [modal, open]);

  return (
    <div className='modal fade' tabIndex={-1} ref={ref}>
      {children}
    </div>
  )
};

export default GenericModal;
