import React, {Component} from 'react'
import Services from '../services/game.service';
import  '../styles/gamesForm.css'


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

  handleChangeInput = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.service.postGame(this.state)
        .then(x => {
            this.props.closeModal()
            this.props.updateGameList()
            this.props.showToast()
        })
        .catch(err => console.log('error', err))
  }

  handleFileUpload = e => {

    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    this.service.handleUpload(uploadData)
        .then(response => this.setState({ imageUrl: response.data.secure_url }))
        .catch(err => console.log(err))
}



  render() {
    return(
              <div className="formulario">
                    <h4>Nuevo juego</h4>

                    <form onSubmit={this.handleFormSubmit}>
                        {/* <div className="form-group">
                            <label htmlFor="input-img">URL imagen</label>
                            <input name="imageUrl" type="text" className="form-control" id="input-img" onChange={this.handleChangeInput} />
                        </div> */}

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

                        <div className="form-group">
                          <label htmlFor="input-img">URL imagen</label>
                          <input name="imageUrl" type="file" className="form-control" id="input-img" onChange={this.handleFileUpload} />
                        </div>
                        
                        <div className="botones">
                          <button type="submit" className="btn btn-dark btn-big">Anunciar</button>
                          <button className="btn  btn-danger btn-md" onClick={this.props.closeModal}>Cerrar</button>
                        </div>

                    </form>
                </div>
    )
  }
}


export default GameForm