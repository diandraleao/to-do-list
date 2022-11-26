import React from 'react'

import './Usuario.css'
import { Task,
  Button
} from './Style'

function Usuario(props) {
  return (
    <Task>
      <input type="checkbox" id={'task-'+props.usuario.id} name={'task-'+props.usuario.id} value={'task-'+props.usuario.id} />
        #{props.usuario.id}
        {props.usuario.nome}
        {props.usuario.sobrenome}
      <Button onClick={props.removerUsuario}>&times;</Button>
    </Task>
  )
}

export default Usuario