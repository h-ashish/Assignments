import {Component} from 'react';
import LodashTodoForm from './LodashTodoForm';
import LodashTodoList from './LodashTodoList';
const _ = require("lodash")
class LodashTodoComp extends Component{
	constructor(props){
		super(props)
		console.log(props)
		console.log(this)
		this.state={
			todo:[]
		}
	}
	addTodo=(e)=>{
		e.preventDefault()
		let ob={}
		_.set(ob, "todo", e.target.task.value);
		_.set(ob, "status", e.target.status.value);
		this.setState({
			todo:this.state.todo.concat(ob)
		})
		console.log(this.state)
		localStorage.setItem("newtodo", this.state.todo)
	}
	render(){
		return(
			<div>
			<LodashTodoList todo={this.state.todo}/>
			<LodashTodoForm addTodo={this.addTodo} />
			</div>
			)
	}
}
export default LodashTodoComp