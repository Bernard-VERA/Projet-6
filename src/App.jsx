import './App.css';
import Home from './pages/Home'
import About from './pages/About';
import Error from './pages/Error';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Logement from './pages/Logement'
import './styles/GlobalStyle.scss'


function App() {
  return (
    <div className="App">
    <Header />
    <main>
    <Routes basename="/kasa">
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
     </Routes>
    </main>
    <Footer />
    </div>
  );
}

export default App;
