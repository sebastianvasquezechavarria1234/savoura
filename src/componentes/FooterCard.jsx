import '../stylos/FooterCard.css'

export const FooterCard = (props) => {
    return(
        <article className="footer__card">
            <h3>{props.titulo}</h3>
            <a href="#">{props.href1}</a>
            <a href="#">{props.href2}</a>
            <a href="#">{props.href3}</a>
            <p>{props.parrafo1}</p>
            <p>{props.parrafo2}</p>
        </article>
    )
}