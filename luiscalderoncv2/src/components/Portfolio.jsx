import React from 'react'
import "./Portfolio.css"


const Portfolio = () => {
  return (
    <>
      <div className='portfolioContainer' id='portfolio'>
        <h2>Portfolio</h2>
        <div className='portfolioContent'>
            <h3>Trabajos recientes UX/UI</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Minim veniam.</p>     
            <div className='imgPortfolio'>
              <img src='https://images.ecestaticos.com/cDMeXF6E5wTdc34CjYXlQHAilE0=/0x0:1920x1080/1200x675/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F50f%2Fc50%2Fe8b%2F50fc50e8bbc38cd73571c85df23a55fa.jpg' alt='EC' />
            </div>
            <div className='imgPortfolio'>
              <img src='https://pbs.twimg.com/media/FE4GarHX0AkGAPw?format=jpg&name=4096x4096' alt='EC' />
            </div>
            <div className='imgPortfolio'>
              <img src='https://miro.medium.com/max/1400/1*EoZXREqlRSZZfrhePMKo5g.jpeg' alt='EC' />
            </div>
            <div className='imgPortfolio'>
              <img src='https://uploads-ssl.webflow.com/6202b1a3f476050b25b22099/6202b1a3f476050723b2260b_El%20Confidencial-02-min.png' alt='EC' />
            </div>
      </div>

      </div>


    </>
  )
}

export default Portfolio