import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './pages/Intro';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
