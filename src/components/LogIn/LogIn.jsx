import "./LogIn.css"
import riga from "../../multimedia/riga.png";
import {Link} from 'react-router-dom'

export default function LogIn () {
    return(
        <body>
            <div class="container">
            <div class="wrapper">
                <div class="title"><span>Login</span></div>
                    <form action="#">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <input type="email" placeholder="Email" required/>
                        </div>
                        <div class="row">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" required/>
                        </div>
                        <div class="pass"><Link to='./home'>Forgot password?</Link></div>
                        <div class="row button">
                            <input type="submit" value="Login"/>
                        </div>
                        <div class="signup-link">Not a member? <Link to= '#'>Signup now</Link></div>
                    </form>
                </div>
            </div>
        </body>
    ) 

}