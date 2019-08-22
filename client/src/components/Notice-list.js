import React, { Component } from 'react'
import Services from '../services/notice.service'

import NoticeCard from './Notice-card'
//import NoticeForm from './Noticeform'

//import Dialog from '@material-ui/core/Dialog';


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
                <div className="container">

                    <h1>Prueba para ver noticias</h1>


                   {this.state.notice.map(notice => <NoticeCard key={notice._id} {...notice} />)}

                </div>
            </>
        )
    }
}


export default NoticeList