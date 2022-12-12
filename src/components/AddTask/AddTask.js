import React, { useState } from 'react'

import * as S from './Style'
import Plus from '../../assets/img/plus.svg'

function AddTask({ addTask, translate }) {
  
  const [description, setDescription] = useState('')
  const [descriptionId, setdescriptionId] = useState(0)

  const onSubmitHandler = event => {
    event.preventDefault()

    const task = {id: descriptionId, title: description, completed: false}
    setdescriptionId(descriptionId+1)

    if (!description) {
      console.log('Digite uma task')
      return;
    }

    addTask(task)
    setDescription('');
  }

  return (
    <S.Task>
      <S.Container>
        <form onSubmit={onSubmitHandler}>
            <S.Title>{translate("addTask.taskTitle")}</S.Title>
            <div>
              <S.Input
                type="text"
                name="description"
                value={description}
                placeholder={translate("addTask.labelTask")}
                onChange={event => setDescription(event.target.value)}
                required />
              <S.Button type="submit">
                {translate("addTask.labelButton")}
                <img src={Plus} alt='icone de adicionar' />
              </S.Button>
            </div>
        </form>
      </S.Container>
    </S.Task>
  )
}

export default AddTask