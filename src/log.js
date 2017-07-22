import React from 'react';
import "./App.css"
import {Card,CardHeader,CardTitle,CardBlock,CardText} from 'reactstrap';


class Log extends React.Component {
	constructor(props){
		super(props)
		this.state = this.props.state
	}
	
	render(){
		console.log(this.props.state)
		var states = this.state.map((state,index)=> {
			return <CardText key = {index} >{state}</CardText>
		})
		if (this.props.state) {
			return(
			<Card>
				<CardHeader>
					Life Cycle Log
				</CardHeader>
				<CardBlock>
				{states}
				</CardBlock>
			</Card>

			)
		} else {
			return <div> Empty Log </div>
		}
		

	}

}


export default Log