import React from 'react'
import Hero from './Hero'
import "./About.css"

const About = (hero) => {

  return (
    
    <>
      <div className='aboutContainer' id='about'>
        <h2>Sobre mí</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged..
        </p>
      </div>  

      <div className='tips'>
          <div className='hours'>
            <span>10</span>
            <p>Años de experiencia</p>
          </div>

          <div className='hours'>
            <span>+100</span>
            <p>Proyectos</p>
          </div>

          <div className='hours'>
            <span>1500</span>
            <p>Horas como profesor</p>
          </div>
      </div>
    </>
  )
}

export default About