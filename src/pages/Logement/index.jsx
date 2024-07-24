import '../../style/App.scss';
import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'
import Log from '../../backend/logements'
import Loge from '../../assets/logements'
import Tags from '../../components/Tags'
import { useParams } from 'react-router-dom';
import Rating from '../../components/Rating'


function Logement (){
  document.getElementById('navAccueil').style.textDecoration="none"
  document.getElementById('navAPropos').style.textDecoration="none"

  const {id} = useParams()
  let pageValid = false;
  for (let i=0;i<Loge.length;i++)
    if (id == Loge[i].id)
      pageValid = true;
  if (!pageValid)
    document.location.href="/error"
  return (<div className="logement">
    <Carrousel
    id = {id} 
    />
    <div className="pres">
    <div className="topH">
      <h1><Log index={id} s="title" /></h1>
      <div className="host">
        <Log className="hostN" index={id} s="hostN"/>
        <Log className="hostP" index={id} s="hostP"/>
      </div>
      </div>
    </div>
    <Log index={id} s="location"/>
    <div className="tagsR">
      <Tags id={id} />
      <div className="ratePhone">
      <Rating id={id}/>
        <div className="hostPhone">
          <Log className="hostN" index={id} s="hostN"/>
          <Log className="hostP" index={id} s="hostP"/>
        </div>
      </div>
    </div>
    <div className="logC">
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