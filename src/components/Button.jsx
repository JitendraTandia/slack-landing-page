import React from 'react'

const Button = ({ text, className, img }) => {
  return (
    <div>
        <button className={className}>{text}</button>
    </div>
  )
}

export default Button