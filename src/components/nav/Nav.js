import React from 'react'
import './nav.scss'
import { Mail, Phone, GetAppSharp } from '@material-ui/icons'

export default function Nav({ menuOpen, setMenuOpen }) {
    return (
        <div className={'nav ' + (menuOpen && 'active')}>
            <div className='container'>
                <div className='left'>
                    <a href='#aboutMe' className='logo'>Bailey Poe</a>
                    <div className='contact'>
                        <Mail className='icon' />
                        <span>BaileyPoe1222@gmail.com</span>
                    </div>
                    <div className='contact'>
                        <Phone className='icon' />
                        <span>(832) 535-9279</span>
                    </div>
                    <div className='contact'>
                        <a href='assets/Resume.pdf' download>
                            <span>Download Resume</span>
                            <GetAppSharp className='icon' />
                        </a>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                        
                    </div>


                </div>
            </div>
        </div>
    )
}
