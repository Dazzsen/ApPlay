import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import Services from '../services/notice.service'

import '../styles/notice-detail.css'
import '../styles/comantarios.css'
import NcomentaryList from './NcomentaryList';


import Nota from './Nota'

class NoticeDetail extends Component {

    constructor(props) {
        super(props)
        this.state = { notice: {}}
        this.service = new Services()
    }

    componentDidMount() {
     
      this.service.getOneNotice(this.props.match.params.id, this.props.userInSession)
      .then(response => this.setState({ notice: response.data }))
      .catch(err => console.log('err', err))
    }
    
    render() {
      console.log(this.state.notice)
      return this.state.notice.type && this.state.notice.type =='Noticia' ? 

        (
          <div className="container all">
              
                  <h1>ApPlay</h1>
                  <h4> > {this.state.notice.plataform} </h4>
                 <div className="encabezado">
                   <h2> {this.state.notice.title}</h2> 
                   <p> Por: {this.state.notice.author} </p>
                 </div>

                 <div>
                 <img src={this.state.notice.imageUrl} alt={this.state.notice.title} />
                 </div>
                 <div className="review">
                   <p>
                     {this.state.notice.review}
                   </p>
                 </div>
                 
                 <div className="comentarios">
                    <h2>Comentarios</h2>
                    <NcomentaryList userInSession={this.props.userInSession}></NcomentaryList>
                 </div>
              </div>
        )
      : 
      <div className="container all">
              
      <h1>ApPlay</h1>
      <h4> > {this.state.notice.plataform} </h4>
     <div className="encabezado">
       <h2> {this.state.notice.title}</h2> 
       <p> Por: {this.state.notice.author} </p>
     </div>

     <div>
     <img src={this.state.notice.imageUrl} alt={this.state.notice.title} />
     </div>
     <div className="review">
       <p>
         {this.state.notice.review}
       </p>
     </div>

     <article className="row notas">
                <div className="col-4">
                    <h4>Nota</h4>
                    <h3> {this.state.notice.note} </h3>
                </div>
                <div className=" col-4 borde">
                        <h4>Lo mejor</h4>
                        <p> {this.state.notice.best} </p>
                </div>
                <div className=" col-4 borde">
                        <h4>Lo peor</h4>
                        <p> {this.state.notice.worst} </p>
                </div>
            
            </article>
     
     <div className="comentarios">
        <h2>Comentarios</h2>
        <NcomentaryList userInSession={this.props.userInSession}></NcomentaryList>
     </div>
  </div>
        
    }

}

export default NoticeDetail