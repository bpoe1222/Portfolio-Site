import { useEffect, useState } from 'react'
import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import {
    featuredPortfolio,
    allAppPortfolio
} from '../../Featured'
import { GitHub, LinkedIn, Facebook } from '@material-ui/icons'


export default function Portfolio({ menuOpen, setMenuOpen }) {
    const [selected, setSelected] = useState('featured');
    const [item, setItem] = useState([]);
    const list = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'allApps',
            title: 'All Apps'
        }
    ]

    useEffect(() => {
        switch(selected){
            case 'featured':
                setItem(featuredPortfolio);
                break;
            case 'allApps':
                setItem(allAppPortfolio);
                break;
            default:
                setItem(featuredPortfolio);
        }
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected} 
                    id={item.id} />
                ))}
            </ul>
            <div className='container'>
                    {item.map((i) => (
                    <div className='item'>
                    <img 
                    src={i.img}
                    alt={i.title}  
                    className='img'
                    />
                    <a href={i.link} target='_blank'>
                    <h3>{i.title}</h3>
                    </a>
                    <div className='repo-link'>
                    <a href={i.repo} className='repo-link' target='_blank'>Link to Repo</a>
                    </div>
                    
                </div>
                    ))}
                
            </div>
            <div className={'footer ' + (menuOpen && 'active')}>
                <a href='https://github.com/bpoe1222' target='_blank'>
                    <GitHub />
                </a>
                <a href='https://www.linkedin.com/in/bailey-poe/' target='_blank'>
                    <LinkedIn />
                </a>
                <a href=''>
                    <Facebook />
                </a>
            </div>
        </div>
    )
}
