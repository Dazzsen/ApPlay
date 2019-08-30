import React, { Component } from 'react'
import Services from '../services/nComentary.service'
import { Link } from 'react-router-dom'

import '../styles/fondocoments.css'

import '../img/logoap.png'

import NcomentaryCard from '../components/NcomentaryCard'
import NcomentaryForm from '../components/NcomentaryForm'

class NcomentaryList extends Component {

    constructor() {
        super()
        this.state = { nComentary: [], users: []}
        this.services = new Services()
    }

    componentDidMount = () => this.updateList()

    updateList = () => {
        this.services.getNcomentarys()
            .then(response => {
              console.log(response)
              this.setState({ nComentary: response.data })
            })
            .catch(err => console.log(err))
    }

    
//////////////////////////////////////////////////////////////////////////////////////////////////////////

    render() {

      if (this.props.userInSession){

        return (
          <>
                <div className="text">
                  <NcomentaryForm userInSession={this.props.userInSession} updateList={this.updateList}></NcomentaryForm>
                </div>
                
                <div className="fondocoments">
                   {this.state.nComentary.map(nComentary => <NcomentaryCard key={nComentary._id} {...nComentary} />)}
                </div>
                
            </>
        )
      }else{

        return (
          <>
                <div className="text">
                </div>
                <div className="fondocoments">
                  <Link to="/signup"><h3>Regítrate para comentar</h3></Link>
                   {this.state.nComentary.map(nComentary => <NcomentaryCard key={nComentary._id} {...nComentary} />)}
                </div>
                
            </>
        )


      }
    }
}



export default NcomentaryList