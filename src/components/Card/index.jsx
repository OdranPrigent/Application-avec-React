function Card({ label, title, picture }) {
    return (
        <div class="card">
            <span class="title">{title}</span>
            {picture}
        </div>
    )
}
 
export default Card