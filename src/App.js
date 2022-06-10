import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Constructor from './pages/Constructor';
import Intro from './pages/Intro';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      {/* <Intro /> */}
      <Constructor />
      <Footer />
    </div>
  );
}

export default App;
