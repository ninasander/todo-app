import React, { useState } from 'react'
import Entry from './Entry'
import ToDoList from './ToDoList'
import styled from 'styled-components/macro'

function App() {
  const [todos, setTodos] = useState([])
  return (
    <Content className="App">
      <Header>
        <h1>To Do's</h1>
      </Header>
      <Entry onCreateTodo={addTodo} />
      <ToDoList todos={todos} />
    </Content>
  )

  function addTodo(todo) {
    setTodos([...todos, todo])
  }
}

const Content = styled.div`
  text-align: center;
`
const Header = styled.header`
  background-color: papayawhip;
`

export default App
