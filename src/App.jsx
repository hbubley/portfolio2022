import './App.css';
import Hero from './components/Hero/Hero';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About/About';
import Footer from './components/Footer/Footer';
import Portfolio from './routes/Portfolio/Portfolio';
import Contact from './routes/Contact/Contact';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import { FIREBASE_CONFIG } from './utility/constants';
import { useEffect, useState } from 'react';

function App() {
  const [projects, setProjects] = useState([])
  const firebaseConfig = FIREBASE_CONFIG;

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);
  const dbRef = ref(db, '/1-evOf81p1DnmQ7OBV3d-aeA8bbpxNpEPSY6Ie5gzTJ4')
  
  useEffect(() => {    
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setProjects(data.Sheet1)
    });
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio data={projects} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
