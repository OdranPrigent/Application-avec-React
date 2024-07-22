import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Layout from './layout'
import Apropos from './pages/Apropos'
import Logement from './pages/Logement'
import Error from './pages/Error'
import './style/App.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)