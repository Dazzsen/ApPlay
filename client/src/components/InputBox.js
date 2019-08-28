import React, { Component } from 'react'
import styled from "@emotion/styled";

const Input = styled.input`
  width: 80%;
  padding: 5px;
  font-size: 20px;
  box-sizing: border-box;
  border: 0;
  border-radius: 25px;
`;


const Button = styled.a`
  width: 20%;
  padding: 5px;
  font-size: 20px;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  background: blue;
  color: white;
  user-select: none;
  cursor: pointer;
  border-radius: 25px;
`;


export class InputBox extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  send() {
    const {text} = this.state
    const {newMessage} = this.props

    if (newMessage) {
      console.log(`Sending message: ${text}`)
      newMessage(text)
    }else {
      console.log("missing Callback")
    }
    this.setState({text: ''})
  }

  render() {
    const text = this.state.text
    return (
      <div>
        <Input 
          value={text}
          onKeyPress={e => {
            if (e.key === "Enter") {
              this.send();
            }
          }}
          onChange={e => {
            this.setState({ text: e.target.value });
          }}>
        </Input>
        <Button onClick={() => this.send()}>Send</Button>

      </div>
    )
  }
}