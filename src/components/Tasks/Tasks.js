import React, { useState, useEffect } from 'react'

import AddTask from '../AddTask/AddTask'
import Task from '../Task/Task'
import { List, ListItem, Title, Counter, HeaderBackground } from './Style'
import { LIST_TASK } from '../../utils/strings/pt-BR'
import mocks from '../../utils/mocks/tasks'

function Tasks() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(mocks)
  }, [])

  const addTask = task => {
    //setTasks(currentTask => [...currentTask, task])
    console.log('addTask')
  }

  const removeTask = _ => {
    console.log('removeTask')
  }

  const completeTask = _ => {
    console.log('completeTask')
  }
  
  return (
    <> 
      <HeaderBackground>
        <AddTask addTask={addTask} />
      </HeaderBackground>
      <Title>{LIST_TASK.title} <Counter>({tasks.length})</Counter></Title>
      <List>
        {tasks.map(task => (
          <ListItem>
            <Task key={task.id}
              usuario={task}
              removeTask={() => removeTask(task)}
              completeTask={() => completeTask(task)}
            />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default Tasks