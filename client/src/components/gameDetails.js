import React, {Component} from 'react'

import Services from '../services/game.service'
import '../styles/gameDetails.css'
import GameList from './GameList'
import Carousel from 'react-bootstrap/Carousel'


import {Chat} from './Chat'


class GameDetail extends Component {

  constructor(props) {
      super(props)
      this.state = { game: {}}
      this.service = new Services()
  }

  componentDidMount() {
   
    this.service.getOneGame(this.props.match.params.id, this.props.userInSession)
    .then(response => this.setState({ game: response.data }))
    .catch(err => console.log('err', err))
  }
  
  render() {
    console.log(this.props)
      return (
        <>
          <div className="container todo">

             <h1>{this.state.game.name}</h1>
             <div className=" esto row">

              <div className="col-6 info">
               <img src={this.state.game.imageUrl} alt={this.state.game.name}/>
                <div className="info2">
                  <h2> {this.state.game.name} </h2>
                  <p>PLataforma:</p>
                  <h3> {this.state.game.plataform} </h3>
                  <p>Precio:</p>
                  <h4> {this.state.game.price} € </h4>
                  <p>Contacto:</p>
                  <h5> {this.state.game.whattsapp} </h5>
                  <p>Comentario:</p>
                  <h5> {this.state.game.comentary} </h5>
                </div>
             </div>
            <div className="col-6">
              <Chat></Chat>
            </div>

          </div>
           </div>
        </>
            
            
            )
          }
          
        }
        
        export default GameDetail
        {/* <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.state.game.imageUrl}
              alt="Third slide"
            />
        
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
        
          </Carousel.Item>
        </Carousel> */}