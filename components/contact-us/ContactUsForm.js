import Card from '../ui/Card';
import classes from './ContactUsForm.module.css';

import React from 'react'
import Button from '../ui/Button';

const ContactUsForm = () => {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "6a041038-e614-4977-8135-a57412123d11");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={handleSubmit}>

                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' required id='name' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='company'>Company</label>
                    <input type='text' required id='company' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input type='text' required id='email' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='phone'>Phone</label>
                    <input type='text' required id='phone' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='notes'>Notes</label>
                    <textarea required id='notes'></textarea>
                </div>

                <div className={classes.actions}>
                    <button id="contact-us" params={{ text: "Send Details" }} type="submit" />
                </div>
            </form>
        </Card>
    )
}

export default ContactUsForm
