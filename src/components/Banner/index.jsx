import Image from '../Images/'
import Image2 from '../Images/bannerF'

function Banner({img}){
    if (img == "1"){
        return <div style={{ objectFit:"cover", width:"90%", height:"167px", marginLeft:"5%", marginTop:"20px"}}>
        <Image class="imgBanner"></Image>
        <div style={{color:"white",fontSize:"40px",marginTop:"-12%",display:"flex",justifyContent:"center"}}>Chez vous, partout et ailleurs</div>
        </div>
    }
    if (img == "2"){
        return <div style={{ objectFit:"cover", width:"90%", height:"167px", marginLeft:"5%", marginTop:"20px"}}>
        <Image2 class="imgBanner"></Image2>
        <div style={{color:"white",fontSize:"40px",marginTop:"-12%",display:"flex",justifyContent:"center"}}>Chez vous, partout et ailleurs</div>
        </div>
    }
}

export default Banner;