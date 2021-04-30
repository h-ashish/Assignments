import {Component} from 'react'
class LodashTodoForm extends Component{
constructor(props){
	super(props)
	this.state={

	}
	console.log(props)
}

render(){
		return(
			<div>
			<form onSubmit={this.props.addTodo}>
			<input type="text" name="task" placeholder="Task"/>
			<input type="text" name="status" placeholder="Status"/>
			<button>Submit</button>
			</form>
			</div>)
	}

}
export default LodashTodoForm