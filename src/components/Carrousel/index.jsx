import log from "../../assets/logements"

function Carrousel({id}){
  for (let i=0;i<log.length;i++)
    if (id == log[i].id)
      id = i;
  let ca = log[id].pictures
  let i =0;
  const nextImage = () => {
    i++
    if (i >= ca.length)
      i=0
    document.getElementById('imgC').src=ca[i]
  }

  const prevImage = () => {
    i--
    if (i < 0)
      i=ca.length-1
    document.getElementById('imgC').src=ca[i]
  }
    return <div class="carrousel">
    <button onClick={prevImage}>Précédent</button>
    <img src={ca[i]} id ="imgC"/>
    <button onClick={nextImage}>Suivant</button>
    </div>
}

export default Carrousel