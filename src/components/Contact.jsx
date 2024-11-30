import React from 'react';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = React.useRef();
  // const recaptchaRef = React.useRef();

  const [userEmail, setUserEmail] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [validationMsg, setValidationMsg] = React.useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setValidationMsg('');

    if (!userName.trim() || !userEmail.trim() || !message.trim()) {
      setValidationMsg('Please fill in all fields.');
      return;
    };

    // if (!recaptchaRef.current.getValue()) {
    //   setValidationMsg('Please verify that you are not a robot.');
    //   return;
    // };

    const formElements = e.currentTarget.elements;
    const honeypot = formElements.honeypot.value;
    if (honeypot) return;


    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_USER_ID)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setValidationMsg('Your message has been sent successfully.'); // Move success message here
          // Reset form fields by resetting state
          setUserEmail('');
          setUserName('');
          setMessage('');
          e.target.reset(); // Reset form on successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          setValidationMsg('Failed to send your message. Please try again.'); // Inform user of failure
        },
      );
  };

  return (
    <div className="form--container--styling">
      {validationMsg && <div className="validation-message" aria-live='polite'>{validationMsg}</div>}
      <h2>Get in touch!</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-row">
          <label htmlFor="user_name">Name</label>
          <input type="text" name="user_name" id="user_name" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" id="user_email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <div style={{ display: "none" }}>
          <label htmlFor="honeypot">Don't fill this out if you're human:</label>
          <input type="text" name="honeypot" id="honeypot" />
        </div>
        <button type='submit' className='contact-page-button'>Send</button>
      </form>
    </div>
  );
};
export default Contact;