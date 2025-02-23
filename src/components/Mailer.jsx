import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setMessage("Loading...")

    emailjs
      .sendForm(import.meta.env.VITE_YOUR_SERVICE, import.meta.env.VITE_YOUR_TEMPLATE, form.current, {
        publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          setMessage("Message sent successfully!")
        },
        (error) => {
          setMessage("Wow, something went wrong!")
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" required/>
      <label>Email</label>
      <input type="email" name="user_mail" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <button type="submit">Send</button>
      { message.length > 0 && <mark>{message}</mark> }
    </form>
  );
};
