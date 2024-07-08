import '../../style/App.scss';
import Banner from '../../components/Banner/'
import Collapse from '../../components/Collapse/'

function Apropos (){
  return (<>
    <Banner
      img = "2"
    />
    <div class ="aproposC">
      <Collapse
      title="Fiabilité"
      text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées pas nos équipes."
      largeur="100%"
      />
      <Collapse
      title="Respect"
      text="un peu de texte pour tester2"
      largeur="100%"
      />
      <Collapse
      title="Service"
      text="un peu de texte pour tester2"
      largeur="100%"
      />
      <Collapse
      title="Sécurité"
      text="un peu de texte pour tester2"
      largeur="100%"
      />
    </div>
  </>)
}

export default Apropos;