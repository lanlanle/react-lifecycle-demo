import React, { Component } from 'react';
import {Button} from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {value: 0}
    this.updated = false
    this.increaseValue = this.increaseValue.bind(this);
  }

  increaseValue(){
    this.setState({
      value:this.state.value+1
    })
  }
  componentWillUpdate(){
    console.log("Component Will Update");
  }

  componentDidUpdate(){
    console.log("Component Did Update");
  }

  shouldComponentUpdate(){
    this.updated= true
    console.log(this.updated);
  }

  render() {
    return (
      <div>
          <Button onClick={this.increaseValue} >{this.state.value}</Button>
      </div>
    );
  }
}

export default App;
