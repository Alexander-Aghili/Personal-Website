"use client"
import React, { useState } from "react";
import style from './page.module.css';
import Navbar from "@/app/components/Navbar/Navbar";

const FORM_ENDPOINT = ""; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data: any = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <div className={style.main}>
        <Navbar></Navbar>
        <div className={style.thanks}>
          <h2>Thank you!</h2>
          <div>We'll be in touch soon.</div>
        </div>
      </div>
    );
  }

  return (
    
    <div
    className={style.main}
    >
      <Navbar></Navbar>
      <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      className={style.form}
      >
      <div>
          <input className={style.text} type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
          <input className={style.text} type="email" placeholder="Email" name="email" required />
      </div>
      <div>
          <textarea className={style.message} placeholder="Your message" name="message" required />
      </div>
      <div>
          <button className={style.submit} type="submit"> Send a message </button>
      </div>
      </form>
    </div>
  );
};

export default ContactForm;