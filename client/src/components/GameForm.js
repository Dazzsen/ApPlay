import React, {Component} from 'react'
import Services from '../services/game.service';


class GameForm extends Component {

  constructor(props){
    super(props)
    this.state={
      imageUrl: '',
      name: '',
      plataform: '',
      price: '',
      whattsapp: '',
      comentary: ''
    }

    this.service = new Services()
  }

  handleChangeInput = e => this.setState({ [e.target.name]: e.target.value })

  handleFormSubmit = e => {
    e.preventDefault()
    this.service.postGame(this.state)
        .then(x => window.location.assign('/'))
        .catch(err => console.log('error', err))
  }

  render() {
    return(
      <div className="container">
        <h4>Nuevo juego</h4>

        <form onSubmit={this.handleFormSubmit}>
             <div className="form-group">
                <label htmlFor="input-img">URL imagen</label>
                <input name="imageUrl" type="text" className="form-control" id="input-img" onChange={this.handleChangeInput} />
            </div>

            <div className="form-group">
              <label htmlFor="input-nombre">Nombre del juego</label>
              <input name="name" type="text" className="form-control" id="input-nombre" onChange={this.handleChangeInput} />
            </div>

            <div className="form-group">
              <label htmlFor="input-plataforma">Plataforma</label>
              <input name="plataform" type="text" className="form-control" id="input-plataforma" onChange={this.handleChangeInput} />
            </div>

            <div className="form-group">
              <label htmlFor="input-precio">Precio</label>
              <input name="price" type="text" className="form-control" id="input-precio" onChange={this.handleChangeInput} />
            </div>

            <div className="form-group">
              <label htmlFor="input-whattsapp">Contacto</label>
              <input name="whattsapp" type="text" className="form-control" id="input-whattsapp" onChange={this.handleChangeInput} />
            </div>

            <div className="form-group">
              <label htmlFor="input-comentario">Comentario</label>
              <input name="comentary" type="text" className="form-control" id="input-comentario" onChange={this.handleChangeInput} />
            </div>

            <button type="submit" className="btn btn-dark btn-sm">Crear</button>

        </form>
      </div>
    )
  }
}


export default GameForm