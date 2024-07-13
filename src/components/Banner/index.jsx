import Image from '../../assets/accueil.jpg'
import Image2 from '../../assets/apropos.jpg'

function Banner({img}){
    if (img == "1"){
        return <div>
                <img src={Image} alt='falaise sur mer' className='imgBannerAccueil' />
                <div class="banner"> Chez vous, partout et ailleurs</div></div>
    }
    else {
        return <div>
        <img src={Image2} alt='montagne' className='imgBanner' />
        </div>
    }
}

export default Banner;