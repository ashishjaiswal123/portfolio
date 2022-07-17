import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf'
import { themeContext } from '../../Context';
import { useContext } from "react";
import {motion} from 'framer-motion'

const Services = () => {
  const transition = {duration : 1, type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode ? 'white' : ''}}>My Awesome</span>
            <span>services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing  rem placeat<br />
                elit. Tenetur minima rem placeat dolor fugit 
            </span>

            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
            
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
        </div>

        {/* right side */}
        <div className="cards">
            <motion.div initial={{left:'25rem'}} whileInView={{left:'16rem'}} transition={transition} style={{left:'16rem'}}>
                <Card emoji={HeartEmoji} heading={'Design'} detail={'Figma, Sketch, Photoshop, Adobe xd'}/>
            </motion.div>
            <motion.div initial={{left:'-25rem'}} whileInView={{top:'12rem', left:'-4rem'}} transition={transition} style={{top:'12rem', left:'-4rem'}}>
                <Card emoji={Glasses} heading={'Developer'} detail={'HTML, CSS, JavaScript, React, React Native'} />
            </motion.div>
            <motion.div initial={{left:'25rem'}} whileInView={{top:'19rem', left:'13rem'}} transition={transition} style={{top:'19rem', left:'13rem'}}>
                <Card emoji={Humble} heading={'UI/UX'} detail={'Figma, Adobe XD, Marvel, Craft'} />
            </motion.div>
            <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services