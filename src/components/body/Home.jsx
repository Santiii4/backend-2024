import "./Home.css"
import twt from "../../multimedia/twt.jpg";
import ig from "../../multimedia/ig.png";
import facebook from "../../multimedia/facebook.png";
import camion4 from "../../multimedia/camion4.jpg";

export default function body () {
    return(
            <div class="Principal">
                <div class="TituloPrinc">
                    <h2>RIGA</h2>
                    <h1>Transporte Internacional</h1>
                    <div class="CONTACTUS">
                        <div class="divLogoRedes">
                            <img class="TWT" src={twt} alt="TWT"/>
                            <img class="IG" src={ig} alt="IG"/>
                            <img class="FCBK" src={facebook} alt="FCBK"/>
                        </div>
                    </div>
                </div>
                <div class="Imagenes">
                    <img src={camion4} alt="" class="ImgCamion"/>
                    <img src="" alt="" />
                </div>
            </div>
        )
    }