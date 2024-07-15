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
    <button onClick={prevImage}>
    <svg viewBox="0 0 167 276" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.67033 127.309L126.778 5.11209C132.682 -0.79963 142.23 -0.79963 148.071 5.11209L162.33 19.3882C168.234 25.3 168.234 34.7964 162.33 40.7082L65.5984 138L162.33 235.292C168.171 241.203 168.171 250.7 162.33 256.612L148.071 270.888C142.167 276.8 132.619 276.8 126.778 270.888L4.67033 148.691C-1.23405 142.78 -1.23405 133.22 4.67033 127.371V127.309Z" fill="white"/>
    </svg>
    </button>
    <img src={ca[i]} id ="imgC"/>
    <button onClick={nextImage}>
    <svg viewBox="0 0 167 276" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M162.33 148.691L40.2222 270.888C34.3178 276.8 24.7703 276.8 18.9288 270.888L4.67032 256.612C-1.23406 250.7 -1.23406 241.204 4.67032 235.292L101.402 138L4.67032 40.7082C-1.17125 34.7965 -1.17125 25.3 4.67032 19.3883L18.9288 5.11211C24.8331 -0.799608 34.3806 -0.799608 40.2222 5.11211L162.33 127.309C168.234 133.22 168.234 142.78 162.33 148.629V148.691Z" fill="white"/>
    </svg>
    </button>
    </div>
}

export default Carrousel