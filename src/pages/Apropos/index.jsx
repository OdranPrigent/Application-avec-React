import '../../style/App.scss';
import Banner from '../../components/Banner/'
import Collapse from '../../components/Collapse/'

function Apropos (){
  document.getElementById('navAccueil').style.textDecoration="none"
  document.getElementById('navAPropos').style.textDecoration="underline"

  return (<>
    <Banner
      img = "2"
    />
    <div className ="aproposC">
      <Collapse
      title="Fiabilité"
      text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées pas nos équipes."
      largeur="100%"
      />
      <Collapse
      title="Respect"
      text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      largeur="100%"
      />
      <Collapse
      title="Service"
      text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      largeur="100%"
      />
      <Collapse
      title="Sécurité"
      text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      largeur="100%"
      />
    </div>
  </>)
}

export default Apropos;