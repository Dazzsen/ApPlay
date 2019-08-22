import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import Services from '../services/notice.service'

import '../styles/notice-detail.css'


class NoticeDetail extends Component {

    constructor(props) {
        super(props)
        this.state = { notice: {} }
        this.service = new Services()
    }

    componentDidMount() {
        this.service.getOneNotice(this.props.match.params.id)
            .then(response => this.setState({ notice: response.data }))
            .catch(err => console.log('err', err))
    }

    render() {
        return (
              <div className="container">
                 <h1>Soy el puto amo!!!</h1>
                 <div>
                  <h4> {this.state.notice.plataform} </h4>
                   <h2> {this.state.notice.title}</h2> 
                   <p> Por: {this.state.notice.author} </p>
                 </div>
                 <div>
                 <img src={this.state.notice.imageUrl} alt={this.state.notice.title} />
                 </div>
                 <div>
                   <p>
                     {this.state.notice.review}
                   </p>
                 </div>
              </div>
        )
    }

}

export default NoticeDetail