import '../stylos/Sec4.css'
import { Sec4Card } from "../componentes/Sec4Card.jsx";

export const Sec4 = () =>{
    return(
        <section className="sec__4">
            <Sec4Card
            titulo="Noticia"
            parrafo="Mantente al día" 
            />
            <Sec4Card
            titulo="Acciones sostenibles"
            parrafo="Invernaderos libres de pesticidas" 
            />
            <Sec4Card
            titulo="Recetas"
            parrafo="Descubre nuestras deliciosas recetas" 
            />
        </section>
    )
}