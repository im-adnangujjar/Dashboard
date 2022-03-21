import React from 'react'


function Icons(props) {
  return (
    <div style={{backgroundColor:props.backgroundColor,
    width:'20px',
    height:'20px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'60px'
    }}>{props.icon}</div>
  )
}

export default Icons