import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AuthServices from '../services/auth.services'
//import Crear from './Crear'

import '../img/logoap.png'


class NavBar extends Component {

    constructor(props) {
        super(props)
        this.authServices = new AuthServices()
        this.state = {
            visible: false
        }
    }


    toggleMenu = () => document.querySelector('.menu').classList.toggle('abierto')

    logout = () => {
        this.authServices.logout()
            .then(x => {
                this.props.setUser(null)
            })
            .catch(err => console.log(err))
    }

    changeState = () => {

        this.setState({visible: true})
        console.log(this.state.visible)
    }

    render() {
console.log(this.state.visible)
        const saludo = this.props.userInSession ? this.props.userInSession.data.username : 'invitado'
        // const role = this.props.userInSession.data
        // console.log(role)


        if (this.props.userInSession) {
            return (
                <>
                
                    <div className="toggle-menu" onClick={this.toggleMenu}>&equiv; </div>
                    <header className="menu">
                    
                        <h1><img src="../img/logoap.png" /> ApPlay</h1> 
                        <nav>
                            {this.props.role === "ADMIN" ? <ul> 

                                <li><Link to="/create">Crear</Link></li>
                            
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/games">Juegos</Link></li>
                                <li><Link to="/notices">Noticias</Link></li>
                                <li><div onClick={this.logout}>Cerrar sesión</div></li>
                                <li><small>Bienvenid@, {saludo}</small></li>
                            </ul> : 
                                <ul> 
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/games">Juegos</Link></li>
                                <li><Link to="/notices">Noticias</Link></li>
                                <li><div onClick={this.logout}>Cerrar sesión</div></li>
                                <li><small>Bienvenid@, {saludo}</small></li>
                            </ul>}
                            
                        </nav>
                    </header>
                </>
            )
        } else {
            return (
                <>
                    <div className="toggle-menu" onClick={this.toggleMenu}>&equiv; </div>
                    <header className="menu">
                        <h1><img src="../img/logoap.png" />ApPlay</h1>
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