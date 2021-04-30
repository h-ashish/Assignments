import {Component} from 'react'
import {Map} from "react-lodash"
const _ = require("lodash");
class LodashTodoList extends Component{
constructor(props){
	super(props)
	this.state={
		todo:[]
	}	
	console.log(this.props)
}
render(arr){
	let mappedarray=_.map(this.props.todo)
console.log(mappedarray)

		return(
			<div>
			<div>
			<h1> List of Added ToDos </h1>
			</div>
			<div>
			{
			<Map collection={mappedarray} iteratee={val => <li key={val}>{val.todo} {val.status}</li>} />
		}
				</div>
				</div>)
	
}}
export default LodashTodoList;