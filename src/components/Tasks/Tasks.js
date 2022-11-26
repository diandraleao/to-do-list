import React, { useState, useEffect } from 'react'

import AddTask from '../AddTask/AddTask'
import Usuario from '../Task/Task'
import { List, ListItem, Title, Counter } from './Style'
import { LIST_TASK } from '../../utils/strings/pt-BR'

function Tasks() {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(resposta => resposta.json())
    .then(dados => {
      const usuarios = dados.data.map(usuario => ({
        id: usuario.id,
        nome: usuario.first_name,
        sobrenome: usuario.last_name,
        email: usuario.email
      }))

      setUsuarios(usuarios)
    })
  }, [])

  const addTask = usuario => {
    setUsuarios(usuariosAtuais => [...usuariosAtuais, usuario])
  }

  const removerUsuario = usuario => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      fetch(`https://reqres.in/api/users/${usuario.id}`, {
        method: 'DELETE'
      })
        .then(resposta => {
          if (resposta.ok) {
            setUsuarios(usuarios.filter(x => x.id !== usuario.id))
          }
        })
    }
  }
  
  return (
    <>
      <AddTask addTask={addTask} />
      <Title>{LIST_TASK.title} <Counter>(6)</Counter></Title>
      <List>
        {usuarios.map(usuario => (
          <ListItem>
            <Usuario key={usuario.id}
              usuario={usuario}
              removerUsuario={() => removerUsuario(usuario)}
            />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default Tasks