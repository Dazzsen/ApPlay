import React, { Component } from 'react'
import Services from '../services/nComentary.service'

import '../styles/fondocoments.css'

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
                
                <div className="fondocoments">
                   {this.state.nComentary.map(nComentary => <NcomentaryCard key={nComentary._id} {...nComentary} />)}
                </div>
                
                <div>
                  <NcomentaryForm userInSession={this.props.userInSession} updateList={this.updateList}></NcomentaryForm>
                </div>
            </>
        )
      }else{

        return (
          <>
                
                <div >
                   {this.state.nComentary.map(nComentary => <NcomentaryCard key={nComentary._id} {...nComentary} />)}
                </div>
                
            </>
        )


      }
    }
}



export default NcomentaryList