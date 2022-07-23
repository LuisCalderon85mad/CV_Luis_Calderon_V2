import React from 'react'
import "./More.css"


const More = ( {languages, habilities} ) => {
  return (
    <>

    <div className='moreContainer' id='more'>
        <h2 className='moreContainer'>Más info</h2>

        <div className='moreList'>
          <h3 className='moreTittle'>Idiomas</h3>

          <div className='languageContainer'>

          <div className='language2'>
            <div className='languageItem'>
              <p className='language'>Español</p>
              <p className='levelLanguage2'>Nativo</p>
            </div>
          </div>

          <div className='language2'>
            <div className='languageItem'>
              <p className='language'>{languages.language}</p>
              <p className='levelLanguage'>{languages.wrlevel}</p>
          </div>

          </div>

        </div>

          <h3 className='moreTittle'>Habilidades</h3>

          <div className='habilitiesContainer'>
            <p className='habilities'>{habilities.first}</p>
            <p className='habilities'>{habilities.second}</p>
            <p className='habilities'>{habilities.third}</p>
            <p className='habilities'>{habilities.four}</p>
            <p className='habilities'>{habilities.five}</p>
            <p className='habilities'>{habilities.six}</p>
            <p className='habilities'>{habilities.seven}</p>
            <p className='habilities'>{habilities.eight}</p>
          </div>

        </div>
    </div>

    </>  
  )
}

export default More