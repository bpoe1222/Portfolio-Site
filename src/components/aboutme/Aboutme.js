import React from 'react'
import './aboutme.scss'
import { KeyboardArrowDown } from '@material-ui/icons'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Aboutme() {

    const text = useRef()

    useEffect(() => {
        init(text.current, {
            showCursor: true,
            backDelay: 1500,
            strings: ['Web Developer', 'Freelancer', 'Visionary']
        })
    }, [])
    return (
        <div className='about-me' id='aboutMe'>
            <div className='left'>
                <div className='img-holder'>
                    <img src='assets/Profile.jpg' alt='Bailey Poe'></img>
                </div>
            </div>
            <div className='right'>
                <div className='container'>
                    <h2>Hello, my name is</h2>
                    <h1>Bailey Poe</h1>
                    <h3><span ref={text}></span></h3>
                </div>
                <a href='#portfolio'>
                    <KeyboardArrowDown className='icon' />
                </a>
            </div>
        </div>
    )
}
