import React, {Component} from 'react'



class Search extends Component {
    constructor (props) {
      super(props)
      this.state = {
        name: ""
      }
      console.log(props)
    }
    
    handleChangeInput = e => {
      this.setState({[e.target.name]: e.target.value}, () =>
        this.props.search(this.state.name)
      )
     
    }


    render(){

      return (
        <form className="form-group">
        <label>Search</label>
        <input type="text" name="name" className="form-control" onChange={this.handleChangeInput}></input>
      </form>
  )
 }
}




export default Search