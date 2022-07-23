import './App.css';
import { useState } from "react"; 
import { CV } from "./CV/CV";
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import More from './components/More';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Portfoliocro from './components/Portfoliocro';
import Form from './components/Form';


const { hero, education, experience, languages, habilities, volunteer } = CV;


function App() {
  const [showPortfolio, setShowPortfolio] = useState (true);
  return (
    <>
      <div className="App">
        <Hero hero={hero}></Hero>
        <About about={hero.aboutMe}></About>
        <Experience experience={experience}></Experience>
        
        <div className='switchPortfolios'>
            <button
              className="buttonFilter"
              onClick={() => setShowPortfolio(true)}
            >
              UX/UI
            </button>
            <button
              className="buttonFilter"
              onClick={() => setShowPortfolio(false)}
            >
              CRO
            </button>
        </div>

        <div>
        {showPortfolio ? (
          <Portfolio />
        ) : (
          <Portfoliocro />
        )}
        </div>

        <Education education={education}></Education>
        <More
          languages={languages}
	        habilities={habilities}
	        volunteer={volunteer}>
        </More>
        <Form></Form>
        <Footer></Footer>
      </div>
    </>  
  );
}

export default App;
