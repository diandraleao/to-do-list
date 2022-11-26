import React from 'react'

import './Usuario.css'
import { 
  Task,
  LabelId,
  LabelTitle,
  LabelDescription,
  Button
} from './Style'

function Usuario(props) {
  return (
    <Task>
      <input type="checkbox" id={'task-'+props.usuario.id} name={'task-'+props.usuario.id} value={'task-'+props.usuario.id} />
        <LabelId>#{props.usuario.id}</LabelId>
        <LabelTitle>{props.usuario.nome}</LabelTitle>
        <LabelDescription>{props.usuario.sobrenome}</LabelDescription>
      <Button onClick={props.removerUsuario}>&times;</Button>
    </Task>
  )
}

export default Usuario