import React from 'react';
import "./Hero.css";



const Hero = ( {hero} ) => {

  return (
    <>
      <div className='hero'>
        <div className='heroInfo'>
          <h3>Hola, soy</h3>
          <h1>{hero.name}</h1>
          <p>{hero.job}</p>
          <span>{hero.me}</span>
        </div>
        <div>
          <img className='imgHero' src="./cabecera.svg" alt='cvImg' />
        </div>  
      </div>
      <nav>
        <ul className='menu'>
          <div className='sign'>
            <img className='imgNav' src={hero.image} alt="Me"/>
            <h3 className='navName'>Luis Calderón</h3>
          </div>
          <li className='navAbout'><a href='#about'>Sobre mí</a></li>
          <li className='experience'><a href='#experience'>Experiencia</a></li>
          <li className='education'><a href='#education'>Educación</a></li>
          <li className='more'><a href='#more'>Más info</a></li>
          <li className='portfolio'><a href='#portfolio'>Portfolio</a></li>
          <li className='contact'><a href='#contact'>Contacto</a></li>
        </ul>
      </nav>

    </>  
  )
}

export default Hero