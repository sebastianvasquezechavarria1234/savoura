import '../stylos/Sec4Card.css'

export const Sec4Card = (props) =>{
    return(
        <article className="sec__4__card">
            <div className="sec__4__card__circle">
                <h2>{props.titulo}</h2>
                <p>{props.parrafo}</p>
            </div>
        </article>
    )
}