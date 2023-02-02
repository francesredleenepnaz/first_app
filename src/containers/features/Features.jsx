import React from 'react'
import './features.css';
import {Feature} from '../../components';
const featuresData = [
  {
    title: 'Improving end distrusts instatly',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Message or aim nothing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id = "features">
      <div className="gpt3__features-heading">
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into the Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item,index) =>(
          <Feature title = {item.title} text ={item.text} key = {item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features