import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: {},
      searchResults: []
    }
  }

  async componentDidMount() {
    let query = 'chicken'
    const response = await fetch(`https://recipe-puppy.p.rapidapi.com/?p=1&i=${query}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
        "x-rapidapi-key": "47c203197cmshefbf7a91d49503bp127312jsna17beb6191c9"
      }
    })
    const data = await response.json()
    this.setState({searchResults: data.results})
    console.log(this.state.searchResults)
  }


  render() {
    return(
      <div className="App">
        {this.state.searchResults.map(result => <img src={result.thumbnail} alt="food" />)}
      </div>
    )
  }
}

export default App