import Card from '../../components/Card/'
import Banner from '../../components/Banner/'
import Logements from '../../backend/logements'
import log from '../../assets/logements.json'
import React, { useEffect } from 'react';

function Accueil (){
  
  function handle(){
    const imgs = document.querySelectorAll('.galleryPicture');
    imgs.forEach(img => {
      let l = img.clientWidth;
      img.style.height=(l+5)+"px";
    });
  }
  window.onresize = handle;
  useEffect(() => {handle()}, [])

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
    cards.push(
      <Card
      key=""
      picture= <Logements
        index={i}
        s="picture"/>
      index={i}
      title=<Logements
        index={i}
        s="title"
      />
    />);
  }
  return <div class="gallery">{cards}</div>
}

export default Accueil;





