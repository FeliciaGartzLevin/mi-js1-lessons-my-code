import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const todosList = document.querySelector('#todos')!
const newTodoForm = document.querySelector('#new-todo-form')

type Todo = {
	title: string,
	completed: boolean,
}

const myNewTodo: Todo = {
	title: "My new todo",
	completed: false
}

// list of todos
const todos: Todo[] = []

// render todos
const renderTodos = () => {
	/*
	// transform todos into a string-array of `<li>` elements
	const listitems = todos.map(todo => {
		return `<li class="list-group-item">${todo}</li>`
	})

	// implode li-array to a single string
	const output = listitems.join('')

	// replace todosList content
	todosList.innerHTML = output
	*/

	// replace todosList content
	todosList.innerHTML = todos
		.map(todo => `<li class="list-group-item">${todo}</li>`)
		.join('')
}

// create a new todo form
newTodoForm?.addEventListener('submit', e => {
	e.preventDefault()

	const newTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')!.value
	if (newTodoTitle.length < 3) {
		alert("Too short todo")
		return
	}

	// push todo into list of todos
	const newTodo: Todo = {
		title: newTodoTitle,
		completed: false,
	}
	todos.push(newTodo)

	// empty input
	document.querySelector<HTMLInputElement>('#new-todo-title')!.value = ''

	// render all todos
	renderTodos()
})

// render all todos
renderTodos()