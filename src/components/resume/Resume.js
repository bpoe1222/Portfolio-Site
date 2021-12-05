import React from 'react'
import './resume.scss'
import { Document } from 'react-pdf'

export default function Resume() {
    return (
        <div className='resume' id='resume'>
        <h1>Click Below to download a copy of my resume!</h1>
            <img src='assets/Resume.png'/>
            <a href='assets/Resume.pdf' download>
                <button type='download'>Download</button>
            </a>
        </div>
    )
}
