import React, { useState } from 'react';
import Modal from './Modal';

const TisbuckRow = ({ addTisbucks, qty, price }) => (
  <div className='row align-items-center mb-2'>
    <div className='col-8'>{`Buy ${qty} Tisbucks`}</div>
    <div className='col-4 text-end'>
      <button
        type='btn'
        className='btn btn-primary'
        onClick={() => addTisbucks(qty)}
      >
        {price}
      </button>
    </div>
  </div>
);

const TisbucksModal = ({ tisbucks, setTisbucks, open, onClose }) => {
  const title = `You currently have ${tisbucks} Tisbuck${
    tisbucks !== 1 && 's'
  }.`;
  const [paymentAlert, setPaymentAlert] = useState('');

  const addTisbucks = (qty) => {
    setTisbucks(parseInt(tisbucks) + qty);
    setPaymentAlert('Payment failed. Dispensing Tisbucks anyways.');
  };

  const closeModal = () => {
    onClose();
    setPaymentAlert('');
  };

  const body = (
    <>
      {paymentAlert !== '' && (
        <div className='alert alert-primary' role='alert'>
          {paymentAlert}
        </div>
      )}
      <h5>Buy More Tisbucks:</h5>
      <div className='container'>
        <TisbuckRow addTisbucks={addTisbucks} qty={5} price='$14.99' />
        <TisbuckRow addTisbucks={addTisbucks} qty={50} price='$99.99' />
        <TisbuckRow addTisbucks={addTisbucks} qty={1000} price='$799.99' />
        <TisbuckRow
          addTisbucks={() => setTisbucks(0)}
          qty='reset'
          price='REMOVE'
        />
      </div>
    </>
  );
  const footer = (
    <button className='btn btn-secondary' type='button' onClick={closeModal}>
      Close
    </button>
  );

  return (
    <Modal
      title={title}
      body={body}
      footer={footer}
      open={open}
      onClose={closeModal}
    />
  );
};

export default TisbucksModal;
