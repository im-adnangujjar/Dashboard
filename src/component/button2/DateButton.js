import React from 'react'

function DateButton(props) {
  return (
    

        

        <div style={{backgroundImage: props.backgroundColor,
         
      
          backgroundColor:' #424242',

          color: 'white',
          width: '130px',
          height: '24px',
          color: 'white',
          borderRadius: '20px',
          display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        }}>
          {props.text}
        </div>
    
    

  )
}

export default DateButton