import {useState} from 'react'
import './contactme.scss'
import ReactContactForm from 'react-mail-form';
import Form from '../../Form';

export default function Contactme() {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
        handleSubmit();
    }

    return (
        <div className='contact-me' id='contactMe'>
            <div className='left'>
                <h1>Contact Me</h1>
                <img src='assets/handShake.svg'></img>
            </div>
            <div className='right'>
            <div>
                <h2>Interested?</h2>
                <h2>Fill out the form below:</h2>
            </div>
                <Form />
                {message && <span>Thanks, I will get back to you soon!</span>}
            </div>
        </div>
    )
}
