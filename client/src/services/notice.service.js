import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getNotices = () => this.service.get('getNotices')
    getOneNotice = id => this.service.get(`getOneNotice/${id}`)
    postNotice = NewNotice => this.service.post(`postNotice`, NewNotice)

  }