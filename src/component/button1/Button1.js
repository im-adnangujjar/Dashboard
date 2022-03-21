
import React from 'react'
import { styles } from './Button1Style'

function Stacks(props) {
  return (
    <div style={{backgroundColor:props.backgroundColor,
        display:'flex',
        justifyContent:'center',
        alignItem:'center',
    width:'81px',
    height:'24px', 
    borderRadius:'4px',}}>{props.text} </div>
  )
}

export default Stacks