import React, { useState } from 'react'

import { 
  Task,
  Linha,
  Input,
  Button
} from './Style'
import { ADD_TASK } from '../../utils/strings/pt-BR'

function AddTask(props) {
  
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = event => {
    event.preventDefault()

    const usuario = { nome, sobrenome, email }

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    })
      .then(resposta => resposta.json())
      .then(dados => {
        setNome('')
        setSobrenome('')
        setEmail('')
        props.adicionarUsuario(dados)
      })
  }

  return (
    <Task>
      <form onSubmit={onSubmitHandler}>
        <Linha>
          <Input
            type="text"
            name="nome"
            value={nome}
            placeholder={ADD_TASK.labelTask}
            onChange={event => setNome(event.target.value)}
            required />
        </Linha>
        
        <Button type="submit">
          {ADD_TASK.labelButton}
        </Button>
      </form>
    </Task>
  )
}

export default AddTask