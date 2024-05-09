import Fast from './components/Fast';
import Footer from './components/Footer';
import FrequentlyAsked from './components/FrequentlyAsked';
import Home from './components/Home';
import LandingPageSlide from './components/LandingPageSlide';
import Navbar from './components/Navbar';
import Updates from './components/Updates';
import Yours from './components/Yours';

function App() {
  return (
    <div className='App '>
      <Navbar />
      <Home />
      <LandingPageSlide />
      <Updates />
      <Yours />
      <Fast />
      <FrequentlyAsked />
      <Footer />
    </div>
  );
}

export default App;
