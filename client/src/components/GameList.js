import React, { Component } from 'react'
import Services from '../services/game.service'

import GameCard from './game-card'
import GameForm from './GameForm'
import Search from './SearchBar'

import '../styles/busqueda.css'
import { Modal, Toast } from 'react-bootstrap'


class GameList extends Component {

    constructor() {
        super()
        this.state = { game: [], showModal: false, showToast: false }
        this.services = new Services()
    }
    
    componentDidMount = () => this.updateList()
    updateList = () => {
        this.services.getGames()
        .then(response => {
            this.setState({ game: response.data })
        })
        .catch(err => console.log(err))
    }
    
    handleModalOpen = () => this.setState({ showModal: true })
    handleModalClose = () => this.setState({ showModal: false })
    handleToastOpen = () => this.setState({ showToast: true })
    handleToastClose = () => this.setState({ showToast: false })
    
    
    searchGame = (word) => {
        let results = []
        this.state.find(elm => {
            if(elm.name.includes(word)) 
            results.push(elm)
        })
        this.setState({
            game: results
        })
    }
    
    
    render() {
        
        return (
            <>

                <Toast onClose={this.handleToastClose} show={this.state.showToast} delay={5000} autohide style={{ position: 'fixed', bottom: 0, right: 10, zIndex: 9999 }}>
                    <Toast.Header>
                        <strong className="mr-auto">Anuncio subido correctamente</strong>
                    </Toast.Header>
                    <Toast.Body>Anuncio guardado en la Base de Datos</Toast.Body>
                </Toast>

                <div className="container">

                    <Modal show={this.state.showModal} onHide={this.handleModalClose}>

                        <Modal.Body>
                            <GameForm closeModal={this.handleModalClose} updateGameList={this.updateList} showToast={this.handleToastOpen} />
                        </Modal.Body>

                    </Modal>


                    <h1>Juegos de segunda mano</h1>

                <div className="busqueda">
                    <div>
                         <button className="btn btn-light btn-big" onClick={this.handleModalOpen}>Anuncia tu juego</button>
                    </div>
                    <div>
                        <Search search={this.searchGame}/>
                    </div>
                </div>



                    <div className="row justify-content-center">
                        {this.state.game.map(game => <GameCard key={game._id} {...game} />)}
                    </div>
                    
                
                </div>
            </>
        )
    }
}




export default GameList