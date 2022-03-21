import React from 'react'
import JaneHancock from '../../assets/JaneHancock.jpg'
import TrevorHansen from '../../assets/TrevorHansen.jpg'
import CloseIcon from '@mui/icons-material/Close';


import { styles } from './MessagesStyle'

function Messages({ setOpen }) {
    return (
        <div style={styles.mainContainer}>
            <div style={styles.display3}>
                <h1 style={styles.heading}> project 9</h1>
                <div onClick={() => setOpen(false)}><CloseIcon /></div>
            </div>
            <div><hr />
                <div style={styles.display2}>
                    <p style={styles.border}>Today</p>
                </div>
            </div>
            <div>
                <div style={styles.display1}>
                    <div style={styles.display}>
                        <img style={styles.image} src={JaneHancock} />
                        <p style={styles.paragraph}>jane Hancock</p>
                    </div>
                    <div >
                        <p>7:12 AM</p>
                    </div>
                </div>
                <div style={styles.display2}>
                    <p style={styles.paragraph1}><mark>Trevor Hansen</mark> Project 9 added. Please take a look and let me know if anything is missing.</p>
                </div>
            </div>
            <div>
                <div>
                    <div style={styles.display1}>
                        <div style={styles.display}>
                            <img style={styles.image} src={TrevorHansen} />
                            <p style={styles.paragraph}>TrevorHansen</p>
                        </div>
                        <div >
                            <p>8:23 AM</p>
                        </div>
                    </div>
                    <div style={styles.display2}><p style={styles.paragraph1}><mark>jane Hancock</mark> this looks great. Why not add the activity picker as well?</p></div>
                </div>
            </div>
            <div style={styles.border1}>
                <div style={styles.display1}>
                    <div style={styles.display}>
                        <img style={styles.image} src={JaneHancock} />
                        <p style={styles.paragraph}>JaneHancock</p>
                    </div>
                    <div >
                        <p>10:57 AM</p>
                    </div>
                </div>
                <div style={styles.display2}><p style={styles.paragraph1}><mark>Trevor Hansen</mark>  thanks for the feedback . I totally overlooked that picker. I’ve added it as you’re correct in that it shold be applied.</p></div>
            </div>
        </div>
    )
}

export default Messages