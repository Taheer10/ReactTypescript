import React from 'react'
type HeadingPorps ={
    children : string
}
export default function Heading(props : HeadingPorps) {
  return (
    <div>{props.children}</div>
  )
}
