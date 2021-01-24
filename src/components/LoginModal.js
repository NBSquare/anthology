import React, { forwardRef, useState } from 'react';
import { Modal as bsModal} from 'bootstrap';
import Modal from './Modal';
import '../css/LoginModal.css';

const LoginModal = ({ open, onClose, setUsername }) => {
  const [alertType, setAlertType] = useState('');
  const [alertContent, setAlertContent] = useState('');

  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const loginSuccess = () => {
    const messageDelay = 500;
    setAlertType('alert-info');
    setAlertContent('Logging in...');
    setTimeout(() => {
      setAlertType('alert-success');
      setAlertContent(`Welcome, ${usernameValue}!`);
    }, messageDelay);
    setTimeout(() => {
      setUsername(usernameValue);
      window.location = '/';
    }, messageDelay * 2);
  };

  const resetPassword = () => {
    const messageDelay = 1000;
    setAlertType('alert-info');
    setAlertContent('Resetting password...');
    setTimeout(() => setAlertContent('Generating new password...'), messageDelay);
    setTimeout(() => setAlertContent(<span>Your new password is <span className='mono bg-light'>TisbertPrimeRocks</span></span>), messageDelay * 2);
  }

  const submit = () => {
    if (usernameValue !== '') loginSuccess();
    // if (usernameValue !== '' && passwordValue === 'TisbertPrimeRocks') {
    //   // Success
    //   setAlertType('');
    //   setAlertContent('');
    //   setUsername(usernameValue);
    //   window.location = '/';
    // } else if (usernameValue === '') {
    //   setAlertType('alert-warning');
    //   setAlertContent('Please include your username.');
    // } else {
    //   // Failure.
    //   setAlertType('alert-danger');
    //   setAlertContent('Password was incorrect. Try resetting it!');
    // }
  };

  const body = (
    <>
      {alertType && <div className={`alert ${alertType}`} role='alert'>{alertContent}</div>}
      <form onSubmit={submit}>
        <label htmlFor='usernameField' className='form-label'>Username</label>
        <input type='text' name='username' id='username-field' className='form-control' value={usernameValue} onChange={e => setUsernameValue(e.target.value)} />

        <label htmlFor='password-field' className='form-label'>Password</label>
        <input type='password' name='password' id='password-field' className='form-control' value={passwordValue} onChange={e => setPasswordValue(e.target.value)} />
        <input type='submit' value='' className='d-none' />
      </form>
    </>
  );

  const footer = (
    <>
      <button type='button' className='btn btn-link' onClick={resetPassword}>Reset Password</button>
      <button className='btn btn-secondary' onClick={onClose}>Cancel</button>
      <button type='button' className='btn btn-primary' onClick={submit}>Log In</button>
    </>
  );

  return (
    <Modal
      title='Log In'
      body={body}
      footer={footer}
      open={open}
      onClose={onClose}
    />
  );
};

export default LoginModal;
