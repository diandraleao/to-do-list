import React, { useState, useEffect } from 'react'

import AddTask from '../AddTask/AddTask'
import Task from '../Task/Task'
import Empty  from '../Empty/Empty'

import * as S from './Style'
// import mocks from '../../utils/mocks/tasks'
import Logo from '../../assets/img/todo_logo.png'
import Brazil from '../../assets/img/icon-brazil.png'
import Usa from '../../assets/img/icon-usa.png'


function Tasks( { translate, changeLanguage }) {
  
  const [tasks, setTasks] = useState([])
  const [remaining, setRemaining] = useState(null);


  const addTask = task => {
    setTasks(currentTask => [...currentTask, task])
    setRemaining(remaining+1)
  }

  const deleteTask = id => {
    setTasks(tasks.filter((task) => task.id !== id));
    setRemaining(remaining-1)
  }

  const completeTask = id => {
    
    const newTasks = tasks;
    const completed = !tasks[id].completed;

    newTasks[id].completed = completed;

    setTasks([...newTasks]);

    console.log('completeTask')
    return;
  }

  
  const handleRemainTasks = (tasks) => {
    if (!tasks.length) return null;

    const newRemaining = tasks.reduce((acm, { completed }) => {
      if (completed) {
        return acm;
      }

      return (acm += 1);
    }, 0);

    setRemaining(newRemaining);
    return;
  };

  useEffect(() => {
    handleRemainTasks(tasks);
  }, [tasks]);


  return (
    <>
    <S.TopBar>
    <S.TopBarButton onClick={() => changeLanguage("en")} title={translate("languages.en")}>
      <S.TopBarButtonIcon src={Usa} alt='icone' />
      {translate("languages.en")}
    </S.TopBarButton>
    <S.TopBarButton onClick={() => changeLanguage("pt")} title={translate("languages.pt")}>
      <S.TopBarButtonIcon src={Brazil} alt='icone' />
      {translate("languages.pt")}
    </S.TopBarButton>
    </S.TopBar>
      <S.HeaderBackground>
        <S.BoxLogo>
          <S.Image src={Logo} alt='Logo to-do' />
        </S.BoxLogo>
        <AddTask addTask={addTask} translate={translate} />
      </S.HeaderBackground>
      <S.Container>
        <div>
        <S.List>
          {
            (tasks.length > 0) ?
            <Task tasks={tasks}
            deleteTask={deleteTask}
            completeTask={completeTask}
            remainingTasks={remaining}
            translate={translate} />
            : <Empty translate={translate} />
          }
        </S.List></div>
      </S.Container>
    </>
  )
}

export default Tasks