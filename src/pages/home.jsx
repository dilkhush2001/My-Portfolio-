import HeroSection from "./HeroSection"
import Projects from './projects';
import Recommendations from './recomendations';
import Contact from './contact';

const Home=()=>{
    return(
        <> 
            <HeroSection />
            <Projects/>
            <Recommendations/>
            <Contact/>
        </>
    )
}

export default Home