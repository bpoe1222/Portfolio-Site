import { useEffect, useState } from 'react'
import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import {
    featuredPortfolio,
    allAppPortfolio
} from '../../Featured'


export default function Portfolio() {
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
                    <a href={i.link} target='_blank'>
                    <img 
                    src={i.img}
                    alt={i.title}  
                    className='img'
                    />
                    </a>
                    <h3>{i.title}</h3>
                </div>
                    ))}
                
            </div>
        </div>
    )
}
