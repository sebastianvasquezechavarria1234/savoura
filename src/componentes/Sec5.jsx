import '../stylos/Sec5.css'
import { Sec5Card } from './Sec5Card.jsx'
import imgBg1 from '../img/sec-5-1.png'
import imgBg2 from '../img/sec-5-2.png'
import imgBg3 from '../img/sec-5-3.png'
import logo1 from '../img/logo-1.png'
import logo2 from '../img/logo-2.png'
import logo3 from '../img/logo-3.png'

export const Sec5 = () =>{
    return(
        <section className="sec__5">
            <div className="sec__5__tt">
                <p>NUEVOS PRODUCTOS</p>
            </div>
            <Sec5Card
            imgBg={imgBg1}
            img={logo1}
            />
            <Sec5Card
            imgBg={imgBg2}
            img={logo2}
            />
            <Sec5Card
            imgBg={imgBg3}
            img={logo3}
            />
        </section>
    )
}