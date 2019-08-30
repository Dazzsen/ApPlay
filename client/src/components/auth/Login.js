import React, { Component } from 'react'
import AuthServices from '../../services/auth.services'

import '../../styles/logi.css'
///////////////////////////////////////////////////////////////////////////////////////

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            err:''
        }
        this.authServices = new AuthServices()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        this.authServices.login(username, password)
            .then(theLoggedUser => {
               
                this.setState({
                    username: '',
                    password: '',
                    err:''
                })
                this.props.setUser(theLoggedUser)
                this.props.history.push('/notices')
            })
            .catch(err => {
                let msg=err.response.data.message
                this.setState({err:msg})
            })
    }

    render() {

        return (
            

            
            
            <div className="container login">
                <h1>Inicio de sesión de usuario</h1>
                <form onSubmit={this.handleFormSubmit}>
                    Usuario: <br/><input name="username" className="form" type="text" value={this.state.username} onChange={this.handleInputChange} /> <br></br>
                    Contraseña: <br/><input name="password" className="form" type="password" value={this.state.password} onChange={this.handleInputChange} /> <br></br>
                    <br/><br/>
                    <input type="submit" value="Iniciar sesión" className="btn btn-outline-light"/>
                </form>
                {this.state.err && <p className="login.error">{this.state.err}</p>}
            </div>

         
        )
    }
}

export default Login