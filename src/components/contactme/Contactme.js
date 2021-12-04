import {useState} from 'react'
import './contactme.scss'
import $ from 'jquery';

export default function Contactme() {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    $('form').on('submit', (e) => {
        // e.preventDefault();
        const email = $('#from-email').val().trim();
        const text = $('#text').val().trim();

        const data = {
            email,
            text
        };

        $.post('/email', data, function() {
            console.log('Server recieved our data');


        });
    });


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
                

        <form className='form' onSubmit={handleSubmit}>
                <input type="text" class="form-control" id="subject" aria-describedby="emailHelp" placeholder="Email" id='from-email'/>
                <textarea class="form-control" id="mesage" placeholder="What would you like to say?" id='text'></textarea>
            
            <button type="submit">Submit</button>
            {message && <span>Thanks, I will get back to you soon!</span>}
        </form>
                    
            </div>
        </div>

        // document.getElementById('#form-data').reset();
    
    )
}
