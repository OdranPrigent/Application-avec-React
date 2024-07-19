import Log from '../../assets/logements.json'
import { Link } from 'react-router-dom'

function Card({ label, title, picture,index }) {
    return (
        <Link to={`/Logement/${Log[index].id}`} key={Log[index].id} class="card">
            {picture}
            {title}
        </Link>
    )
}
 
export default Card