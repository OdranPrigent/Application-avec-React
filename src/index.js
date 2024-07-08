import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Header from './components/Header'
import Apropos from './pages/Apropos'
import Logement from './pages/Logement'
import Error from './components/Error'
import './style/App.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)