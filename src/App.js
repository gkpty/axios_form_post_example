import React, { Component } from 'react';
import axios from 'axios';
import './App.css'

class App extends Component {
  state = {
    sourceRoute: '',
    sourceObject: '',
    destRoute: '',
  }

  handleChange = event => {
    this.setState({ 
      sourceRoute: event.target.value,
      sourceObject: event.target.value,
      destRoute: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const bucketVars = {
      sourceRoute: this.state.sourceRoute,
      sourceObject: this.state.sourceObject,
      destRoute: this.state.destRoute
    };

    axios.post(`https://your_api_url`, { bucketVars })
      .then(res => {
        console.log(res);
        console.log(res.data);
        // if res.data.contains("success")
          //notice("success")
          // execute next function
        // else
          //alert("fail") 
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Copy To Bucket</h2>
          <label>
            Source Route
            <input type="text" placeholder="Source Route" name="sourceRoute" onChange={this.handleChange} />
          </label>
          <label>
            Source Object
          <input type="text" placeholder="Source Object" name="sourceObject" onChange={this.handleChange} />
          </label>
          <label>
            Destination Route
            <input type="text" placeholder="Destination Route" name="destRoute" onChange={this.handleChange} />
          </label>         
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default App;
