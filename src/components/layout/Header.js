import React from 'react'
import { observer } from 'mobx-react-lite'

const Header = observer((props) => {
  return (
    <header className="header">
      <div className="header__left">{props.left}</div>
      <div className="header__title">{props.title}</div>
      <div className="header__right">{props.right}</div>
    </header>
  )
})

export default Header