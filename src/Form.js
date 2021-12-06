import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Contactme from './components/contactme/Contactme';

export const ContactUs = () => {
    const form = useRef();

    const [message, setMessage] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        setMessage(true)

        emailjs.sendForm('service_8mzkwhf', 'template_qr2fwco', form.current, 'user_18BExuBRoWkRON4ZCQ8d8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='form'>
            <label>Name</label>
            <input type="text" name="user_name" placeholder='John Doe'/>
            <label>Email</label>
            <input type="email" name="user_email" placeholder='JohnDoe@mail.com'/>
            <label>Message</label>
            <textarea name="message" placeholder="What's on your mind?"/>
            <input type="submit" value="Send" className='submit'/>
            {message && <span>Thanks, I will get back to you soon!</span>}
        </form>
    );
};

export default ContactUs;