 import React from 'react'

const TodoItem = ({id, name, isComplete}) => (
	<li >
        <input type="checkbox" 
        	name={name} 
        	id={name.replace(/ /g,'').toLowerCase()} 
        	defaultChecked={isComplete}/> 
        {name}
    </li>
) 

export default (props) => (
	<div class="Todo-List">
		<ul>
		  {props.todos.map(todo => <TodoItem key={todo.id} {... todo} />)}
		</ul>
	</div>
 )