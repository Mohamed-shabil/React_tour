import React from 'react'

const Greet = (props)=> {
  return (
    <div>
        <h2>{props.name} a.k.a {props.heroName}</h2>
        {props.children}
    </div>
  )
}

export default Greet