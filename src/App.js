import React from 'react';
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
      <div id="mainContainer">
          <textarea rows="2" cols="20" value={this.state.Value} onChange={this.handleChange} ></textarea>
          <div >
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