import React from 'react'
import './aboutme.scss'
import { KeyboardArrowDown } from '@material-ui/icons'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import { GitHub, LinkedIn } from '@material-ui/icons'

export default function Aboutme() {

    const text = useRef()

    useEffect(() => {
        init(text.current, {
            showCursor: true,
            loop: false,
            typeSpeed: 75,
            strings: ['I live in Baytown, Texas and love front-end development. I am a Web Developer, freelancer, and visionary. Scroll to get to know more about me!']
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
                    <h3><span ref={text} className='typer'></span></h3>
                </div>
                <a href='#portfolio'>
                    <KeyboardArrowDown className='icon' />
                </a>
            </div>
            <div className='footer'>
                <a href='https://github.com/bpoe1222' target='_blank'>
                    <GitHub />
                </a>
                <a>
                    <LinkedIn />
                </a>
            </div>
        </div>
    )
}
