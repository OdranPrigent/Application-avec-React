import log from '../assets/logements.json'

function logements({s, index}){
  if (s == "cover")
    return <ul>
      {log.map((log) => (
        <li key={log.cover}>{log.cover}</li>
      ))}
    </ul>
  if (s == "title")
    return <p key={log[index].title}p>{log[index].title}</p>
  if (s == "picture")
    return <img key={log[index].cover} class="galleryPicture" src={log[index].cover}/>
  if (s == "description")
    return <ul>
      {log.map((log) => (
        <li key={log.description}>{log.description}</li>
      ))}
    </ul>
  if (s == "rating")
    return <ul>
      {log.map((log) => (
        <li key={log.rating}>{log.rating}</li>
      ))}
    </ul>
}

function logementsf(i) {
  return <ul>
    <li key={log[i].cover}>{log[i].cover}</li>
  </ul>;
}

export default logements