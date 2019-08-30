import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/coaster-card.css'
import NoticeDetail from './Notice-detail';
//import { type } from 'os';


const NoticeCard = ({ title, type, imageUrl, _id }) => {
console.log(_id)
    return (
        <div className="container notice">
            <Link to={`/notices/${_id}`}>
                <article className="row coaster-card">
                <div className="col-4">
                        <img src={imageUrl} alt={title} />
                </div>
                <div className="text col-8">
                        <h3>{title}</h3>
                        <p>{type}</p>
                </div>
                
                </article>
            </Link>
        </div>
    )
}

export default NoticeCard