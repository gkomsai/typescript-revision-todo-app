import React from 'react'

import { TodoItems } from './Todo'

const TodoList = ({id, title, status}: TodoItems) => {
  return (
    <div>
        <span>{id}-{title} - {status ? 'True': 'False'}</span> 
    </div>
  )
}










export default TodoList