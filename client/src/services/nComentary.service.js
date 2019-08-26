import axios from 'axios'

export default class Services {

  constructor(){

    this.service = axios.create({
      baseURL: 'http://localhost:5000/api/',
       withCredentials: true
    })
  }

  getNcomentarys = () => this.service.get('getNcomentarys')
  getOneNcomentary = id => this.service.get(`getOneNcomentary/${id}`)
  postNcomentary = (NewComentary, user) => this.service.post(`postNcomentary`, {NewComentary, user})
}