import React from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'

class TodosContainer extends React.Component {
  
  renderTodos = () => this.props.todos.map((todo, index) => <Todo key={index} text={todo} />)

  render(){
    return(
      <div>
        {this.renderTodos()}
      </div>
    )
  }
}

const mSTP = state => {
  return {
    todos: state.todos
  }
}

export default connect(mSTP)(TodosContainer)