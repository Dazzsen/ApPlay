import React, {Component} from 'react'
import Services from '../services/notice.service'



class NoticeForm extends Component {

      constructor(props){
          super(props)
          this.state = {
            title: '',
            author: '',
            plataform: '',
            genre: '',
            type: '',
            imageUrl: '',
            review: '',
            note: '',
        
            best: '',
            worst: ''
          }
          this.service = new Services()
      }


    //   handleChangeInput = e => this.setState({ [e.target.name]: e.target.value })

    //  handleFormSubmit = e => {
    //     e.preventDefault()
    //     this.service.postNotice(this.state)
    //         .then(x => {
    //             //this.props.closeModal()
    //             this.props.updateCoasterList()
    //         })
    //         .catch(err => console.log('error', err))


    handleChangeInput = e => this.setState({ [e.target.name]: e.target.value })

    handleFormSubmit = e => {
        e.preventDefault()
        this.service.postNotice(this.state)
            .then(x => window.location.assign('/notices'))
            .catch(err => console.log('error', err))
    }

      render() {
        return(
          <>
                <h4>Nueva noticia</h4>

                <hr></hr>

                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="input-titulo">Titulo</label>
                        <input name="title" type="text" className="form-control" id="input-titulo" onChange={this.handleChangeInput} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="input-autor">Autor</label>
                        <input name="author" type="text" className="form-control" id="input-autor" onChange={this.handleChangeInput} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="input-plataforma">Plataforma</label>
                        <input name="plataform" type="text" className="form-control" id="input-plataforma" onChange={this.handleChangeInput} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="input-genero">Género</label>
                        <input name="genre" type="text" className="form-control" id="input-genero" onChange={this.handleChangeInput} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="input-tipo">Tipo</label>
                        <input name="type" type="text" className="form-control" id="input-tipo" onChange={this.handleChangeInput} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="input-img">URL imagen</label>
                        <input name="imageUrl" type="text" className="form-control" id="input-img" onChange={this.handleChangeInput} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="input-analisis">Análisis</label>
                        <textarea rows="10" cols="40" name="review" type="text-area" className="form-control" id="input-analisis" onChange={this.handleChangeInput} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="input-note">Nota</label>
                        <input name="note" type="number" className="form-control" id="input-note" onChange={this.handleChangeInput} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="input-best">Lo mejor</label>
                        <input name="best" type="text" className="form-control" id="input-best" onChange={this.handleChangeInput} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="input-worst">Lo peor</label>
                        <input name="worst" type="text" className="form-control" id="input-worst" onChange={this.handleChangeInput} />
                    </div>


                    <button type="submit" className="btn btn-dark btn-sm">Crear</button>
                    
                </form>
            </>
        )
      }
}

export default NoticeForm