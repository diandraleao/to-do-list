import React from 'react'

import Icon from '../../assets/img/empty.svg'
import * as S from './Style'

function Empty({ translate }) {

  return(
    <>
      <S.Image src={Icon} alt='icone' />
      <S.Title>{translate("emptyList.title")}</S.Title>
      <S.SubTitle>{translate("emptyList.subtitle")}</S.SubTitle>
    </>
  )
}

export default Empty