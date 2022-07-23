import React from 'react'
import "./Experience.css"


const Experience = ( {experience} ) => {

  return (
    <>
      <div className='experienceContainer' id='experience'>
        <h2>Experiencia</h2>
        <div className='experienceList'>
        {experience.map((item) => {
          return (
            <div className='experienceDates' key={JSON.stringify(item)}>
              <p className='experienceTitle'>{item.name}</p>
              <p className='experiencePlace'>{item.where}</p>
              <p className='experienceDate'>{item.date}</p>
              <p className='experienceDescription'>{item.description}</p>
              <hr className='line'></hr>
            </div>
          );
        })}
      </div>
    </div>
    </>  
  )
}

export default Experience