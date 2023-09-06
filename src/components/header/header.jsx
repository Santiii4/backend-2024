import "./header.css"
import riga from "../../multimedia/riga.png";
import {Link} from 'react-router-dom'

export default function Header () {
    return(
        <div>
            <body class="body"> 
                <section class="sectionMain">
                    <div class="divLogoTitulo">     
                        <Link to= '/home'><img class="logo" src={riga}alt="R.I.G.A" /></Link>
                    </div>
                    <div>
                        <ul class="BarraNav">
                            <li class="liNav">
                                <Link to= '/shop' class="linkInfo">SHOP</Link>
                            </li>
                            <li class="liNav">
                                <Link to = '/Register' class="linkInfo">Register</Link>
                            </li>
                            <li class="liNav">
                                <Link to = '/Login' class="linkInfo">Login</Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </body>
        </div>
    )
}