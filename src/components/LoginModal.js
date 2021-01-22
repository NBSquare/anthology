import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/LoginModal.css';

const LoginModal = ({ setUsername }) => {
  const [alertType, setAlertType] = useState('');
  const [alertContent, setAlertContent] = useState('');

  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const resetPassword = () => {
    const messageDelay = 1000;
    setAlertType('alert-info');
    setAlertContent('Resetting password...');
    setTimeout(() => setAlertContent('Generating new password...'), messageDelay);
    setTimeout(() => setAlertContent(<span>Your new password is <span className='mono bg-light'>TisbertPrimeRocks</span></span>), messageDelay * 2);
  }

  const submit = () => {
    if (usernameValue !== '' && passwordValue === 'TisbertPrimeRocks') {
      // Success
      setAlertType('');
      setAlertContent('');
      setUsername(usernameValue);
      // history.push('/menu');
      window.location = '/menu';
    } else if (usernameValue === '') {
      setAlertType('alert-warning');
      setAlertContent('Please include your username.');
    } else {
      // Failure.
      setAlertType('alert-danger');
      setAlertContent('Password was incorrect. Try resetting it!');
    }
  };

  return (
    <>
      <div className='modal fade' id='login-modal' tabIndex={-1}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4>Log In</h4>
            <button type='button' className='btn-close' data-bs-dismiss='modal'></button>
          </div>
          <div className='modal-body'>
            {alertType && <div className={`alert ${alertType}`} role='alert'>{alertContent}</div>}
            <form>
              <label htmlFor='usernameField' className='form-label'>Username</label>
              <input type='text' name='username' id='username-field' className='form-control' value={usernameValue} onChange={e => setUsernameValue(e.target.value)} />

              <label htmlFor='password-field' className='form-label'>Password</label>
              <input type='password' name='password' id='password-field' className='form-control' value={passwordValue} onChange={e => setPasswordValue(e.target.value)} />
            </form>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-link' onClick={resetPassword}>Reset Password</button>
            <button className='btn btn-secondary' data-bs-dismiss='modal'>Cancel</button>
            <button type='button' className='btn btn-primary' onClick={submit}>Log In</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default LoginModal;
