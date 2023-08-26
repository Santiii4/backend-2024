import "./footer.css"
import Contact from '../../multimedia/Contact Us.png'
import {Link} from 'react-router-dom'

export default function Footer () {
    return(
        <footer>
        <p>Contacto: Riga@gmail.com</p>
        <Link to= '/Contact Us'><img class="Contact" src={Contact}alt="Contact" /></Link>
    </footer>
    )
}