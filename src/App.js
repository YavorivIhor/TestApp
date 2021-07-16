import React from 'react';
import './App.css'

import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyDWBzvKg1f8-8Ijsyi5JoU6oYDziSZ3EyQ",
  authDomain: "test-app-4b520.firebaseapp.com",
  databaseURL: "https://test-app-4b520-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-app-4b520",
  storageBucket: "test-app-4b520.appspot.com",
  messagingSenderId: "116274295112",
  appId: "1:116274295112:web:c21a041c70eff0d216c37d",
  measurementId: "G-4NWJQVGJPY"
})

const firestore = firebase.firestore();

class Form extends React.Component {
  constructor() {
    super();
    this.Data = [];
    this.state = {
      showdata : this.Data,
      Value : ""
    }
    this.appendData = this.appendData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  appendData() {
    this.Data.unshift(<div id="data"><pre>{this.state.Value}</pre></div>);
    this.setState({
      showdata : this.Data,
      Value : ""
    });
  }

 handleChange(e) {
  let getTextAreaValue = e.target.value;
  <input type="checkbox" />;
  this.setState({
    //<input type="checkbox" value={getTextAreaValue}/>
    Value :getTextAreaValue
  });
}

  render() {
    return (
      <div id="mainContainer" >
          <textarea rows="2" cols="20" value={this.state.Value} onChange={this.handleChange} ></textarea>
          <div>
          <input  type="submit" className="button" onClick={this.appendData}  value="Додати"/>
          </div>
          <div id="data-Container">
          {this.Data}
          </div>
      </div>
    );
  }
}
export default Form;