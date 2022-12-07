import React, { useState } from 'react'

import * as S from './Style'
import { LIST_TASK } from '../../utils/strings/pt-BR'
import Trash from '../../assets/img/trash.svg'

function Task( { tasks, removeTask, completeTask } ) {

  const [checkbox, setCheckbox] = useState(false)
  const [isCompleted, setCompleted] = useState(false);

  const completeTaskHandler = (e) => {
    setCheckbox()
    setCompleted(!isCompleted);
    console.log('completeTaskHandler')
    completeTask()
  }

  return (
    <>
      <S.StatusHeading>
        <S.AllTasksTitle>{LIST_TASK.headingCompleted}
          <S.Counter>3</S.Counter>
        </S.AllTasksTitle>
        <S.CompletedTasksTitle>{LIST_TASK.headingCompletedTasks}
          <S.Counter>1</S.Counter>
        </S.CompletedTasksTitle>
      </S.StatusHeading>
      {tasks.map((task, index) => (
        console.log('index: ' + index),
        <S.Box key={'box-'+index}>
          <div>
            <input type="checkbox"
            id={'task-' + task.id}
            name={'task-' + task.id}
            value={task.completed}
            defaultChecked={task.completed}
            onChange={(e) => (console.log(e))} />
              <S.LabelTitle className={isCompleted ? 'completed' : ''}>
                {task.title}
              </S.LabelTitle>
              <S.Button onClick={removeTask}>
                <img src={Trash} alt='icone lixeira' />
              </S.Button>
          </div>
        </S.Box>
      ))}
    </>
  )
}

export default Task