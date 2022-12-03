import React from 'react'

import Icon from '../../assets/img/empty.svg'
import { EMPTY_LIST } from '../../utils/strings/pt-BR'
import * as S from './Style'

function Empty() {

  return(
    <>
      <S.Image src={Icon} alt='icone' />
      <S.Title>{EMPTY_LIST.title}</S.Title>
      <S.SubTitle>{EMPTY_LIST.subtitle}</S.SubTitle>
    </>
  )
}

export default Empty