import React, { Component } from 'react';
import {Button, Row, Col,Container} from 'reactstrap';
import {extendObservable} from "mobx"
import {observer} from "mobx-react"
import Log from './log'
import TodoList from './TodoList'

export default observer(class App extends Component {
  constructor(props){
    super(props);
    extendObservable (this,{
      componentState:[]
    })
    this.state = {
      value: 0,
    }
    this.updated = false
    this.increaseValue = this.increaseValue.bind(this);
    // this.lifeCycleUpdate = this.lifeCycleUpdate.bind(this);
  }

  lifeCycleUpdate(input){
    this.componentState.push(input)

  }

  increaseValue(){
    this.setState({
      value:this.state.value+1
    })
  }
  // componentWillUpdate(){
  //   console.log("Component Will Update");
  // }

  componentDidUpdate(){
    // console.log("Component Did Update");
    this.lifeCycleUpdate("Component Did Update");
  }


  componentDidMount(){
    // console.log("Component Did Mount");
    this.lifeCycleUpdate("Component Did Mount");
  }

  componentWillUnmount(){
    console.log("Component Will Unmount");
  }
    

  render() {
      // console.log(this.componentState)
      return (
      <div>
         
            <Button onClick={this.increaseValue} >{this.state.value}</Button>
          
            <TodoList  onClick={this.increaseValue}/>
             <Log state = {this.componentState}/>
       
      </div>
    )
    
    
  }
})
