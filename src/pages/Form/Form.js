import { style } from '@mui/system'
import React from 'react'
import Button from '../../component/button/Button'
import Create from '../../component/create/Create'
import CloseIcon from '@mui/icons-material/Close';
import { styles } from './FormStyle'
// import  Button  from '@mui/material'

function Form({setOpen}) {
   
    return (
        <div style={styles.mainContainer}>
            <div style={styles.subContainer}>
                <div style={styles.display2}>
                    Internal Projects {"<"} create new projects
                    <div onClick={() => setOpen(false)}><CloseIcon /></div>
                </div>

                <h2>Create New Project</h2>
                <div style={styles.subDiv}>
                    <h3 style={styles.heading}>projects Details</h3>
                    <hr style={styles.Line} />
                    <div> <input style={styles.input} type="text" placeholder='Name' /></div><br />
                    <div ><textarea style={styles.textarea}Name="messages" rows="9" cols="59">Description(optional)</textarea></div><br />
                    <div>
                        <input style={styles.input} type="number" placeholder='$ Budget' /></div>

                </div>
                <div style={styles.subDiv}>
                    <h3 style={styles.heading}>Project Timeline</h3>
                    <hr style={styles.Line} />
                    <div><select style={styles.input}>
                        <option value="priority">Priority</option>
                    </select></div><br />
                    <div><input style={styles.input} type="date" placeholder='start date' /></div><br />
                    <div><input style={styles.input} type="date" placeholder='end date' /></div>
                </div>
                <div style={styles.subDiv}> <h3 style={styles.heading}>Business Type</h3>
                    <hr style={styles.Line1} />
                    <div style={styles.border}>
                        <p style={styles.heading3}>NAICS Classification</p>
                        <div style={styles.display1}>
                        <p style={styles.paragraph5}>11 Agriculture, Forestry, Fishing and Hunting</p>
                        <div style={styles.iconBorder}><CloseIcon/></div>
                        </div>
                    </div>
                </div>
                <div><Create /></div>
                <div style={styles.display}>
                    <div><Button text="Create" width='100px' height='48px' /></div>
                    <div><Button text="Cancel" width='100px' height='48px' /></div>
                </div>
               
            </div>
        </div>
    )
}

export default Form