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
                        <a href='mailto:baileypoe1222@gmail.com'>BaileyPoe1222@gmail.com</a>
                    </div>
                    <div className='contact'>
                        <Phone className='icon' />
                        <a href='tel:8325359279'>(832) 535-9279</a>
                    </div>
                    <div className='contact'>
                        <a href='assets/Resume.pdf' download className='resume'>
                            <span>Download Resume</span>
                            <GetAppSharp className='icon' />
                        </a>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger-nav' onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        
                    </div>
        

                </div>
            </div>
        </div>
    )
}
