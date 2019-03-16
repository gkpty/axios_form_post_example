import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  state = {
    sourceRoute: '',
    sourceObject: '',
    destRoute: '',
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value
    const name = target.name;
    this.setState({ 
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const bucketVars = {
      sourceRoute: this.state.sourceRoute,
      sourceObject: this.state.sourceObject,
      destRoute: this.state.destRoute
    };

    const url = `https://your-api-url`;

    const headers = {
      'Accept': 'application/json', 
      'Content-Type': 'application/x-www-form-urlencoded' 
    };

    axios.post( url, bucketVars, { headers } )
      .then(res => {
        console.log(res);
        console.log(res.data);
        // if res.data.contains("success")
          // notice("success")
          // do something
        // else
          // alert("fail") 
      })
  }

  render() {
    return (
      <div className="ui container">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <h2 className="ui dividing header">Copy To Bucket</h2>
          <div className="field">
            <label>
              Source Route
              <input type="text" placeholder="Source Route" name="sourceRoute" onChange={this.handleChange} />
            </label>
          </div>
          <div className="field">
            <label>
              Source Object
            <input type="text" placeholder="Source Object" name="sourceObject" onChange={this.handleChange} />
            </label>
          </div>
          <div className="field">
            <label>
              Destination Route
              <input type="text" placeholder="Destination Route" name="destRoute" onChange={this.handleChange} />
            </label>
          </div>                  
          <button className="ui button" type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default App;
