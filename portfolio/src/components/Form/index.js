import React, { useState, useEffect } from 'react';

// Here we import a helper function that will check if the email is valid
import {validateEmail} from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');




  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    //set inputType = input attribute 'name'
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password

    if (inputType === 'email') {
            setEmail(inputValue);

    }
    if (inputType === 'name') {
      setName(inputValue);
    }
    if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    console.log(e);
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    setEmail('');
    setName('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div>
<div className="container py-4">

        <form id="contactForm">

        <div className="mb-3">
            <label className="form-label text-left" htmlFor="name">Name</label>
            <input 
            className="form-control" 
            id="name" 
            type="name" 
            placeholder="Name" 
            value={name} 
            onChange={handleInputChange}
            name="name"/>
        </div>

        <div className="mb-3">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          className="form-control"
        />        
        </div>

        <div className="mb-3">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea 
            className="form-control" 
            id="message" 
            type="message" 
            placeholder="Message" 
            value={message}
            onChange={handleInputChange}
            name="message"
            ></textarea>
        </div>

        <div className="d-grid">
            <button className="btn btn-primary btn-lg" type="submit" onClick={handleFormSubmit}>Submit</button>
        </div>

        </form>

        </div>
      {errorMessage && (
        <div>
          <p className="error-text text-center">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;