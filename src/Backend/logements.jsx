import log from '../assets/logements.json'

function logements({s, index}){
  for (let i=0;i<log.length;i++)
    if (index == log[i].id)
      index = i;
  if (s == "cover")
    return <ul>
      {log.map((log) => (
        <li key={log.cover}>{log.cover}</li>
      ))}
    </ul>
  else if (s == "title")
    return <p key={log[index].title}p>{log[index].title}</p>
  else if (s == "picture")
    return <img key={log[index].cover} class="galleryPicture" src={log[index].cover}/>
  else if (s == "description")
    return <p key={log[index].description}p>{log[index].description}</p>
  else if (s == "equipments")
    return <ul>
      {log[index].equipments.map((log) => (
        <li key={log}>{log}</li>
      ))}
    </ul>  
  else if (s == "location")
    return <p key={log[index].location} class = "location" >{log[index].location}</p>
  else if (s=="hostN")
    return <p key={log[index].host} >{log[index].host.name}</p>
  else if (s=="hostP")
    return <img src={log[index].host.picture}/>

}

export default logements