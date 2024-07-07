import Image from '../Images/'

function Banner(){
    return <div style={{ objectFit:"cover", width:"90%", height:"167px", marginLeft:"5%", marginTop:"20px"}}>
        <Image style={{borderStyle:"solid", borderRadius:"20px", borderColor:"white"}} />
        <div style={{color:"white",fontSize:"40px",marginTop:"-115px",display:"flex",justifyContent:"center"}}>Chez vous, partout et ailleurs</div>
    </div>
}

export default Banner;