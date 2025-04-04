import { useState } from 'react';
import Footer from './Pages/Footer';
import Hero from './Pages/Hero';
import Navbar from './Pages/Navbar';
import Projects from './Pages/Projects';
import TechStack from './Pages/Techstack';
import Loader from './Pages/Loader';
import About from './Pages/About';
import Timeline from './Pages/Timeline';


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <Navbar />  
          <Hero />
          <Timeline />
          <Projects />
          <About />
          <TechStack />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
