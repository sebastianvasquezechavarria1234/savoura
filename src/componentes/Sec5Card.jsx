import '../stylos/Sec5Card.css'

export const Sec5Card = (props) =>{
    return(
        <article className="sec__5__card">

            <img src={props.imgBg} alt="Logo" />
            <img src={props.img} alt="Logo" />
        </article>
    )
}