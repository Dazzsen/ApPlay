import React, { Component } from 'react'
import Services from '../services/notice.service'

import NoticeCard from './Notice-card'
import '../styles/notices-list.css'
//import NoticeForm from './Noticeform'
// import '../img/ps4.png'
//import Dialog from '@material-ui/core/Dialog';
import MyComponent from './MyComponent'


class NoticeList extends Component {

    constructor() {
        super()
        this.state = { notice: []}
        this.services = new Services()
    }

    componentDidMount = () => this.updateList()

    updateList = () => {
        this.services.getNotices()
            .then(response => {
              console.log(response)
              this.setState({ notice: response.data })
            })
            .catch(err => console.log(err))
    }

    


    render() {

        return (
            <>
            <div className="not">

                <div className="container">
           
                
                
                    <h2 className="noticiatit">Noticias</h2>

                <div className="noticias">
                   {this.state.notice.map(notice => <NoticeCard key={notice._id} {...notice} />)}
                </div>

                </div>
            </div>
            </>
        )
    }
}


export default NoticeList