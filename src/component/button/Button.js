import React from 'react'

function Button(props) {
  // const onClickHandler = (()=>{
  //   <F
  // })

  return (
    <div 
    // onClick={onClickHandler} 
    style={{
      width: props.width, height: props.height, backgroundColor: "#1976D2",
      color: "white",
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #1976D2',
      borderRadius: '3px',
      fontSize: '16px',
      margin: '14px 16px 12px 10px'
    }}> {props.text}</div>
  )
}

export default Button