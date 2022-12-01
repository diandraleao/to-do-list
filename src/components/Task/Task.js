import React from 'react'

import { 
  Box,
  LabelId,
  LabelTitle,
  Button
} from './Style'

function Task(props) {
  return (
    <Box>
      <input type="checkbox"
        id={'task-'+props.usuario.id}
        name={'task-'+props.usuario.id}
        value={'task-'+props.usuario.id}
        checked={props.usuario.completed}
        onChange={props.completeTask}
      />
      <LabelId>#{props.usuario.id}</LabelId>
      <LabelTitle>{props.usuario.title}</LabelTitle>
      <Button onClick={props.removeTask}>&times;</Button>
    </Box>
  )
}

export default Task