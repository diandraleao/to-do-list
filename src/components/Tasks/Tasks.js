import React, { useState, useEffect } from 'react'

import AddTask from '../AddTask/AddTask'
import Task from '../Task/Task'
import Empty  from '../Empty/Empty'

import * as S from './Style'
// import mocks from '../../utils/mocks/tasks'
import Logo from '../../assets/img/todo_logo.png'

function Tasks() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    // setTasks(mocks)
  }, [])

  const addTask = task => {
    setTasks(currentTask => [...currentTask, task])
    console.log('task added')
  }

  const removeTask = _ => {
    console.log('removeTask')
  }

  const completeTask = _ => {
    console.log('completeTask')
  }

  return (
    <> 
      <S.HeaderBackground>
        <S.BoxLogo>
          <S.Image src={Logo} alt='Logo to-do' />
        </S.BoxLogo>
        <AddTask addTask={addTask} />
      </S.HeaderBackground>
      <S.Container>
        <div>
        <S.List>
          {
            (tasks.length > 0) ?
            <Task tasks={tasks}
            removeTask={removeTask}
            completeTask={completeTask} />
            : <Empty />
          }
        </S.List></div>
      </S.Container>
    </>
  )
}

export default Tasks