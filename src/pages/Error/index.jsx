import { Link } from 'react-router-dom'

function Error (){
  if (document.getElementById('navAccueil'))
    document.getElementById('navAccueil').style.textDecoration="none"
  if (document.getElementById('navAPropos'))
    document.getElementById('navAPropos').style.textDecoration="none"

  return (<div className="error">
    <h1>404</h1>
    <p>Oups! La page que vous demandez n'existe pas.</p>

    <Link to={'/'} className="retour">
            Retourner sur la page d'accueil
    </Link>
  </div>)
}

export default Error;