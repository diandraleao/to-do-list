import React, { useState } from 'react'

import * as S from './Style'
import Plus from '../../assets/img/plus.svg'
import { ADD_TASK } from '../../utils/strings/pt-BR'
// import randomIntFromInterval from '../../utils/handlers/Numbers'

function AddTask(props) {
  
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

    props.addTask(task)
    // console.log('task submitted')
    setDescription('');
  }

  return (
    <S.Task>
      <S.Container>
        <form onSubmit={onSubmitHandler}>
            <S.Title>{ADD_TASK.title}</S.Title>
            <div>
              <S.Input
                type="text"
                name="description"
                value={description}
                placeholder={ADD_TASK.labelTask}
                onChange={event => setDescription(event.target.value)}
                required />
              <S.Button type="submit">
                {ADD_TASK.labelButton}
                <img src={Plus} alt='icone de adicionar' />
              </S.Button>
            </div>
        </form>
      </S.Container>
    </S.Task>
  )
}

export default AddTask