import React from 'react'

export const Footer = (props) => {
  return (
    <>
      <div className="footer">Footer</div>
      <div className="footer">bienvenido {props.nameToFooter}</div>
    </>
  )
}
