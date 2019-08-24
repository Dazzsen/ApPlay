import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getGames = () => this.service.get('getGames')
    getOneGame = id => this.service.get(`getOneGame/${id}`)
    postGame = NewGame => this.service.post(`postGame`, NewGame)
    handleUpload = theFile => this.service.post('/upload', theFile)
  }