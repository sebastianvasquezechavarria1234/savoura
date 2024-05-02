import '../stylos/Sec2Card.css'

export const Sec2Card = (props) => {
    return(
        <article className="sec__2__card">
            <div className="sec__2__card__bg">

            </div>
            <div className="sec__2__card__body">
                <p>{props.parrafo}</p>
                <h2>{props.titulo}</h2>
                <a href="#">{props.ancor}</a>
            </div>
        </article>
    )
}