import '../../style/App.scss';
import Logements from '../../backend/logements'
import queryString from 'query-string';
import { useParams } from 'react-router-dom';


function Logement (){
  const {id} = useParams()
  console.log(id)
  return (<>
  <h1>test</h1>
  </>)
}

export default Logement;