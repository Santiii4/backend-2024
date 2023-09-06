import "./Register.css"
import riga from "../../multimedia/riga.png";
import {Link} from 'react-router-dom'

export default function Register () {
    return(
        <body>
            <div class="container1">
            <div class="wrapper">
                <div class="title"><span>Register</span></div>
                    <form action="#">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <input type="email" placeholder="Email" required/>
                        </div>
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <input type="username" placeholder="Username" required/>
                        </div>
                        <div class="row">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" required/>
                        </div>
                        <div class="row">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Repeat Password" required/>
                        </div>
                        <div class="row button">
                            <input type="submit" value="Register"/>
                        </div>
                        <div class="signup-link">Are you a member? <Link to= '/Login'>Signin now</Link></div>
                    </form>
                </div>
            </div>
        </body>

    )
}