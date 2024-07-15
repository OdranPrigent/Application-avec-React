import { Link } from 'react-router-dom'
import Card from '../../components/Card/'
import Banner from '../../components/Banner/'
import Logements from '../../backend/logements'
import log from '../../assets/logements.json'

function Accueil (){
  return <>
    <Banner
      img = "1"
    />
    {createCard ()}
  </>
}


function createCard (){
let l = log.length
  let cards = [];
  for (let i = 0; i < l; i++) {
    cards.push(<Link to={`/Logement/${log[i].id}`} key={log[i].id}>
      <Card
      key=""
      picture= <Logements
        index={i}
        s="picture"
      />
      title=<Logements
        index={i}
        s="title"
      />
    />
    </Link>);
  }
  return <div class="gallery">{cards}</div>
}

export default Accueil;





