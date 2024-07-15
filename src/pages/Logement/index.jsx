import '../../style/App.scss';
import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'
import queryString from 'query-string';
import Log from '../../backend/logements'
import { useParams } from 'react-router-dom';


function Logement (){
  const {id} = useParams()
  return (<div class="logement">
    <Carrousel
    id = {id} 
    />
    <h1><Log index={id} s="title" /></h1>
    <Log index={id} s="location" class = "location"/>
    <div class="logC">
    <Collapse
      title="Description"
      text=<Log index={id} s="description" />
      largeur="45%"
      />
      <Collapse
      title="Equipements"
      text=<Log index={id} s="equipments" />
      largeur="45%"
      />
      </div>
  </div>)
}

export default Logement;