import React, { useState } from 'react'

import { 
  Task,
  Linha,
  Label,
  Title,
  Input,
  Button,
  FooterLabel
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
      <Title>{ADD_TASK.title}</Title>
      <form onSubmit={onSubmitHandler}>
        <Linha>
          <Label>{ADD_TASK.labelTitle}</Label>
          <Input
            type="text"
            name="nome"
            value={nome}
            onChange={event => setNome(event.target.value)}
            required />
        </Linha>
        <Linha>
          <Label>{ADD_TASK.labelDescription}</Label>
          <Input
            type="text"
            name="sobrenome"
            value={sobrenome}
            onChange={event => setSobrenome(event.target.value)}
            required />
        </Linha>
        
        <Button type="submit">
          {ADD_TASK.labelButton}
        </Button>
      </form>
      <FooterLabel>{ADD_TASK.labelFooter}</FooterLabel>
    </Task>
  )
}

export default AddTask