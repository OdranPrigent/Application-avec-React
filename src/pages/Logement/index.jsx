import '../../style/App.scss';
import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'
import Log from '../../backend/logements'
import Loge from '../../assets/logements'
import Tags from '../../components/Tags'
import { useParams } from 'react-router-dom';
import Rating from '../../components/Rating'
import { Link } from 'react-router-dom'


function Logement (){
  const {id} = useParams()
  let pageValid = false;
  for (let i=0;i<Loge.length;i++)
    if (id == Loge[i].id)
      pageValid = true;
  if (!pageValid)
    document.location.href="/error"
  return (<div class="logement">
    <Carrousel
    id = {id} 
    />
    <div class="pres">
    <div class="topH">
      <h1><Log index={id} s="title" /></h1>
      <div class="host">
        <Log class="hostN" index={id} s="hostN"/>
        <Log class="hostP" index={id} s="hostP"/>
      </div>
      </div>
    </div>
    <Log index={id} s="location"/>
    <div class="tagsR">
      <Tags id={id} />
      <div class="ratePhone">
      <Rating id={id}/>
        <div class="hostPhone">
          <Log class="hostN" index={id} s="hostN"/>
          <Log class="hostP" index={id} s="hostP"/>
        </div>
      </div>
    </div>
    <div class="logC">
    <Collapse
      title="Description"
      text=<Log index={id} s="description" />
      largeur="45%"
      fontS="18px"
      />
      <Collapse
      title="Equipements"
      text=<Log index={id} s="equipments" />
      largeur="45%"
      fontS="18px"
      />
      </div>
  </div>)
}

export default Logement;