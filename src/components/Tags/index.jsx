import log from "../../assets/logements"

function Tags({id}){
    for (let i=0;i<log.length;i++)
        if (id == log[i].id)
          id = i;
    
    let tags = 1
    if (id >0)
        tags = log[id].tags;
    return <div class="tags">
    {log[id].tags.map((log) => (
        <span class="tag" key={log}>{log}</span>
      ))}
    </div>
}


export default Tags