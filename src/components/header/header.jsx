import "./header.css"
import riga from "../../multimedia/riga.png";

export default function Header () {
    return(
        <div>
            <body class="body"> 
                <section class="sectionMain">
                    <div class="divLogoTitulo">     
                        <a href="../RIGA-main/INDEX.HTML"><img class="logo" src={riga}alt="R.I.G.A" /></a>
                    </div>
                    <div>
                        <ul class="BarraNav">
                            <li class="liNav">
                                <a href="./PAGES/shop.html" class="linkInfo">SHOP</a>
                            </li>
                            <li class="liNav">
                                <a href="./PAGES/INFO.html" class="linkInfo">+INFO</a>
                            </li>
                            <li class="liNav">
                                <a href="./PAGES/REGISTER.html" class="linkInfo">REGISTER</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </body>
            <div class="Principal">
                <div class="TituloPrinc">
                    <h2>RIGA</h2>
                    <h1>Transporte Internacional</h1>
                    <div class="CONTACTUS">
                        <button class="CONTACTUS_BUTTON">CONTACT US</button>
                        <div class="divLogoRedes">
                            <img class="TWT" src="../../multimedia/twt.jpg" alt="TWT"/>
                            <img class="IG" src="../../multimedia/ig.png" alt="IG"/>
                            <img class="FCBK" src="../../multimedia/facebook.png" alt="FCBK"/>
                        </div>
                    </div>
                </div>
                <div class="Imagenes">
                    <img src="../../multimedia/camion4.jpg" alt="" class="ImgCamion"/>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}