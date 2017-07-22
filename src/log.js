import React from 'react';


class Log extends React.Component {
	
	render(){
		var states = this.props.state.map((state,index)=> {
			return <p key = {index} >{state}</p>
		})
		return(
			<div>{states}</div>
			)

	}

}


export default Log