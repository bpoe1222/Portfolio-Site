import React from 'react'
import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#aboutMe'>Home</a>
                </li>
            
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#portfolio'>Portfolio</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href='#resume'>Resume</a>
                </li>
            
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#contactMe'>Contact Me</a>
                </li>
            </ul>
        </div>
    )
}
