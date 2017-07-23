import React from "react";
import {extendObservable} from "mobx"
import {observer} from "mobx-react"

import {Button,FormGroup,Input,Card,CardHeader,CardTitle,CardBlock,CardText} from 'reactstrap';


export default observer (class TodoList extends React.Component {
	constructor(){
		super();
		extendObservable(this, {
			todos:[],
			currentValue: ""
		})
		// this.todos = []
		// this.state = {
		// 	currentValue : ""
		// }
		this.changeValue = this.changeValue.bind(this)
		this.addTodos = this.addTodos.bind(this)
		
	}
	changeValue(event) {
		this.currentValue = event.target.value
	}
	addTodos() {
		this.todos.push(this.currentValue)
		this.currentValue = ""

	}
	// renderTodos () {
	// 	this.todos.map((todo,index)=> {
	// 		return <p key = {index} >{todo}</p>
	// 	})
	// }

	render () {
		var Todos = this.todos.map((todo,index)=> {
			return <CardText key = {index} >{todo}</CardText>
		})
		console.log(this.todos)
		return (
		<div>
			
 			<Card>
				<CardHeader>
					Todo List
				</CardHeader>
				<CardBlock>
				{Todos}
				</CardBlock>
			</Card>
			 <FormGroup>
		          <Input type="text" placeholder="Add a todo" value = {this.currentValue} onChange={this.changeValue}/>
		          <Button onClick = {this.addTodos}> Add</Button>
        	</FormGroup>

		</div>	
		)

		
	}
})