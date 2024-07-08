import { Link } from 'react-router-dom'
import Card from '../../components/Card/'
import Banner from '../../components/Banner/'
import Logements from '../../backend/logements'

function Accueil (){
  return <>
    <Banner
      img = "1"
    />
    {createCard ()}
  </>
}

function createCard (){
  let cards = [];
  for (let i = 0; i < 20; i++) {
    cards.push(<Link to="/Logement"><Card
      key=""
      picture= <Logements
        index={i}
        s="picture"
      />
      title=<Logements
        index={i}
        s="title"
      />
    /></Link>);
  }
  return <div class="gallery">{cards}</div>
}

export default Accueil;





