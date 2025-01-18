import React from 'react'
import './Card.css'
import img from '../assets/img.svg'
import icon from '../assets/icon.svg'

export default function Card(prop) {
  return (
    
             
            <div className="card">
                <div className='c'>
                {prop.aksiya && <h2>-35%</h2>}
                    <img className='i' src={prop.image} alt="" />
                    <button><img src={icon} alt="" />Add To Cart</button>
                </div>
                
                <h3>{prop.ism}</h3>
                <div>
                    <p className='w'>{prop.narx}</p>
                    {prop.aksiya && <p className='y'>$1160</p>}
                </div>
            </div>
      
  )
}
