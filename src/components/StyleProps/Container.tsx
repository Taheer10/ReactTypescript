import React from 'react'

type StyleProps = {
    styles : React.CSSProperties
}

export default function Container(props : StyleProps) {
  return (
    <div style={props.styles}>STyling React
    </div>
  )
}
