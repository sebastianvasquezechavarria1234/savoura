import { Sec2Card } from "../componentes/Sec2Card.jsx";
import '../stylos/Sec2.css'

export const Sec2 = () => {
    return(
        <section className="sec__2">
            <div className="sec__2__tt">
                <h1>¿Te preocupa el medio ambiente? Nuestras acciones son sostenibles.</h1>
                <a href="#">Aprende más</a>
            </div>
            <Sec2Card
            parrafo="Nuestros productos"
            titulo="Garantizamos productos de alta calidad, frescos y accesibles."
            ancor="Todos nuestros productos"
            />
            <Sec2Card
            parrafo="Nuestras posiciones"
            titulo="Aumentar la diversidad laboral en Savoura."
            ancor="Ver ofertas de empleo"
            />
        </section>
    )
}