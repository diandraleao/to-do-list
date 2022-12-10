import React, { useState } from 'react'

import * as S from './Style'
import { LIST_TASK } from '../../utils/strings/pt-BR'
import Trash from '../../assets/img/trash.svg'

function Task( { tasks, deleteTask, completeTask, remainingTasks } ) {

  return (
    <>
      <S.StatusHeading>
        <S.AllTasksTitle>{LIST_TASK.headingCompleted}
          <S.Counter>{remainingTasks}</S.Counter>
        </S.AllTasksTitle>
        <S.CompletedTasksTitle>{LIST_TASK.headingCompletedTasks}
          <S.Counter>1</S.Counter>
        </S.CompletedTasksTitle>
      </S.StatusHeading>
      {tasks.map((task, index) => (
        <S.Box key={'box-'+index}>
          <div>
            <S.Input type="checkbox"
            id={'task-' + task.id}
            name={'task-' + task.id}
            value={task.completed}
            defaultChecked={task.completed}
            onClick={() => completeTask(task.id)} />
            <S.LabelTitle>
              {task.title}
            </S.LabelTitle>
            <S.Button onClick={() => deleteTask(task.id)}>
              <img src={Trash} alt='icone lixeira' />
            </S.Button>
          </div>
        </S.Box>
      ))}
    </>
  )
}

export default Task