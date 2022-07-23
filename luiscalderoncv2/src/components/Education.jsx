import React from 'react'
import "./Education.css"


const Education = ( {education} ) => {
  
  return (
    
    <>
    <div className='experienceContainer' id='education'>
        <h2>Educación</h2>
      <div className='experienceList'>
        {education.map((item) => {
          return (
            <div className='experienceDates' key={JSON.stringify(item)}>
              <p className='experienceTitle'>{item.name}</p>
              <p className='experiencePlace'>{item.where}</p>
              <p className='experienceDate'>{item.date}</p>
              <hr className='line'></hr>
            </div>
          );
        })}
      </div>
    </div>
    </>  
 
  )
}

export default Education