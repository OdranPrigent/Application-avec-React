import { Link } from 'react-router-dom'
import Card from '../../components/Card/'
import Banner from '../../components/Banner/'
import Logements from '../../backend/logements'

function gallery (){
  return <>
  <Card
    key="bla"
    label="blo"
    picture= ""
    title="job"
  />
  </>
}

function Accueil (){
  return <>
    <Banner/>
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





