import React from 'react'
import vitelogo from '../assets/react.svg'
import './Card.css'

const Card = (props) => {
  return (
    <>
    <div className='mm'>
        <img src={vitelogo} alt="hh" />
        <div className="cont">
            <h1>{props.name}</h1>
            <p>hello, i am a web developer and i know html css javascript and currently learning react</p>
            <button>contact</button>
        </div>
    </div>
    </>
  )
}
export default Card;
