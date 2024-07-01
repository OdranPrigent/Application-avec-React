import logo from './logo.svg';
import './App.scss';
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><h1>Accueil</h1>
      <nav>
        <Link to="/fiche-logement">titre logement</Link>
        <Link to="/a-propos">A propos</Link>
      </nav>
    </div>
  },
  {
    path: '/fiche-logement',
    element: <div>Fiche logement
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A propos</Link>
      </nav>
    </div>
  },
  {
    path: '/a-propos',
    element: <div>A propos
      <nav>
        <Link to="/fiche-logement">titre logement</Link>
        <Link to="/">Accueil</Link>
      </nav>
    </div>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
