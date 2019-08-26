import React, { Component } from 'react'


import AuthServices from '../services/auth.services'
//import Crear from './Crear'



class NavBar extends Component {

    constructor(props) {
        super(props)
        this.authServices = new AuthServices()
    }



    

    render() {
        const saludo = this.props.userInSession ? this.props.userInSession.data.username : 'invitado'
    


        if (this.props.userInSession) {
            return (
                <>
                                <p><small>Bienvenid@, {saludo}</small></p>
                          
                </>
            )
        } else {
            return (
                <>
                    <div className="toggle-menu" onClick={this.toggleMenu}>&equiv; </div>
                    <header className="menu">
                        <h1>ApPlay</h1>
                        <nav>
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/games">Juegos</Link></li>
                                <li><Link to="/notices">Noticias</Link></li>
                                <li><Link to="/signup">Registro</Link></li>
                                <li><Link to="/login">Inicio de sesión</Link></li>
                                <li><small>Bienvenid@, {saludo}</small></li>
                            </ul>
                        </nav>
                    </header>
                </>
            )
        }

    }
}
export default NavBar