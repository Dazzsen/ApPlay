import React, {Component} from 'react'
import Services from '../services/nComentary.service'



class NcomentaryForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      comentary:'',

    }

    this.service = new Services()
  }



  handleChangeInput = e => this.setState({ [e.target.name]: e.target.value })

    handleFormSubmit = e => {
        e.preventDefault()
        this.service.postNcomentary(this.state, this.props.userInSession)
            .then(x => {
              console.log(x)
              this.props.updateList()
              // window.location.assign('/notices')
            })
            .catch(err => console.log('error', err))
    }

    render(){
      console.log(this.props)
      return(
        <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
               <label htmlFor="input-comentario">Comenta</label>
               <input name="comentary" type="text" className="form-control" id="input-comentario" onChange={this.handleChangeInput} />
            </div>
            <button type="submit" className="btn btn-light btn-sm">Enviar</button>
        </form>
      )
    }
}

export default NcomentaryForm