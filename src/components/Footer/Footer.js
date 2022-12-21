import React from 'react'

import * as S from './Style'

function Footer({ translate }) {
  
  return (
    <S.Footer>
      <p>{translate("footerSign")}</p>
    </S.Footer>
  )
}

export default Footer