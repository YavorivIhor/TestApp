import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';

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
//const preObject = document.getElementById('object');
//const dbRefObject = firebase.database().ref().child('object');
//dbRefObject.on ('value', snap => console.log(snap.val()));

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
    this.deleteitem = this.deleteitem.bind(this)
  };

  appendData() {
    this.Data.unshift(this.state.Value);
    this.setState({
      showdata : this.Data,
      Value : ""
    });
  console.log (this.Data);
  }

  deleteitem = (index) => {
    //console.log (this.Data);
    this.Data.splice(index, 1);
        this.setState({
          showdata: this.Data
        });
 }

 handleChange(e) {
  let getTextAreaValue = e.target.value;
  this.setState({
    Value : getTextAreaValue
  });
}
  render() {
    return (
      <div id="mainContainer" >
        <textarea rows="5" cols="20" value={this.state.Value} onChange={this.handleChange} ></textarea><br/><hr/>
        <input type="submit" className="button" onClick={this.appendData}  value="Додати"/><br/>
        <br/>{
           this.Data.map((value, index) => <div key={index+1}><input type="checkbox"/>  
           <label id='object'>{value}</label>  <input type="submit" className="button" onClick={() => this.deleteitem(index)} value="Видалити"/><hr width='20%' /></div>)
         }
      </div>
    );
  }
}
export default Form;