import React, { Component } from 'react'
import io from "socket.io-client";



class NoticeDetail extends Component {

  constructor() {
      super()
      this.socket = io(`${process.env.REACT_APP_URL_SOCKET}`)
      this.socket.emit("subscribe", room)
  
  }

  sendMsg = (msg, user) =>{
    this.socket.emit("mensajeria", {msg, user})
  }

}