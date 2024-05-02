import '../stylos/Footer.css'
import { FooterCard } from "../componentes/FooterCard.jsx";

export const Footer = () =>{
    return(
        <footer>
            <section className="sec__max__width">
                <FooterCard
                titulo="Acerca de"
                href1="Nuestra historia"
                href2="Acciones sostenibles"
                />
                <FooterCard
                titulo="Nuestros productos"
                href1="Tomates Savoura"
                href2="Tomates Savoura Bio"
                href3="Fresas Savoura"
                />
                <FooterCard
                titulo="Noticias"
                href1="Comunicado de prensas"
                href2="Promoción semanal"
                />
                <FooterCard
                titulo="Carreras"
                href1="Nuestras posiciones"
                href2="Aplicaciones espontáneas"
                href3="Contacto"
                />
                <FooterCard
                parrafo1="Les serres Sagami inc.
                2743 Boul. Sainte-Sophie
                Sainte-Sophie (Québec)
                J5J 2V3"
                parrafo2="Teléfono: (450) 431-6343"
                />

           
            </section>

            
        </footer>
    )
}