import React from 'react'
import style from './button.module.css'
const button = ({isOutline,icon,text,...rest }) => {
  return (
   <button {...rest} className={isOutline ? style.secondaryButton : style.primaryButton}>

      {icon}
      {text}
    </button>
    
  )
}

export default button
