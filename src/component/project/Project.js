import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import JacobJones from '../../assets/JacobJones.jpg'
import Button1 from '../../component/button1/Button1'
import DateButton from '../../component/button2/DateButton'
import Icons from '../../component/icons/Icons'
import { Grid } from '@mui/material'
import ReadMessage from '../readMessage/ReadMessage';
import { styles } from '../../pages/dashBoard/DashBoardStyle'
import JaneCooper from '../../assets/JaneCooper.jpg'
import KristinWatson from '../../assets/KristinWatson.jpg'
import TrevorHansen  from '../../assets/TrevorHansen.jpg'
import JaneHancock from '../../assets/JaneHancock.jpg'
import EleanorPena from '../../assets/EleanorPena.jpg'



function project() {
    return (
        <div> <Grid container spacing={4}>
            <Grid item lg={4}><div style={{ margin: ' 30px 30px 0px' }}>Project3</div></Grid>
            <Grid item lg={8}>
                <Grid container spacing={6}>
                    <Grid item lg={1}> <div style={styles.align} ><div
                    
                    >
                          <ReadMessage/></div>
                          </div></Grid>
                    <Grid item lg={2}>  <div style={styles.bgColor1}>
                        <img style={styles.image} src={JacobJones} /><p style={styles.paragraph}>jacob jones</p>
                    </div>
                    </Grid>
                    <Grid item lg={3}> <div style={styles.align}><Button1 text="Healthy" backgroundColor="#00C853" /></div></Grid>
                    <Grid item lg={2}> <div style={styles.date}><DateButton text='Feb 8 - Mar 26' backgroundColor='linear-gradient(90deg, #00C853 50.51%, #424242 50.52%)' width='100%' /></div></Grid>
                    <Grid item lg={2}> <div style={styles.budgets}>$23,000</div></Grid>
                    <Grid item lg={2}><div style={styles.icon}><Icons icon="!!!" backgroundColor="red" /></div></Grid>
                </Grid>
            </Grid>
        </Grid>
            <hr />
            <Grid container spacing={4}>
                <Grid item lg={4}><div style={{ margin: ' 30px 30px 0px' }}>Project3</div></Grid>
                <Grid item lg={8}>
                    <Grid container spacing={6}>
                        <Grid item lg={1}> <div style={styles.align}> <ReadMessage/>   </div></Grid>
                        <Grid item lg={2}>  <div style={styles.bgColor1}>
                            <img style={styles.image} src={JaneCooper} /><p style={styles.paragraph}>JaneCooper</p>
                        </div>
                        </Grid>
                        <Grid item lg={3}> <div style={styles.align}><Button1 text="Stuck" backgroundColor="#D50000" /></div></Grid>
                        {/* <Grid item lg={2}> <div style={styles.date}><DateButton  /></div></Grid> */}
                        <Grid item lg={2}> <div style={styles.budgets1}>$154,110</div></Grid>
                        <Grid item lg={2}><div style={styles.icon1}><Icons icon="!!!" backgroundColor="#00C853" /></div></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <hr />
            <Grid container spacing={4}>
                <Grid item lg={4}><div style={{ margin: ' 30px 30px 0px' }}>Project3</div></Grid>
                <Grid item lg={8}>
                    <Grid container spacing={6}>
                        <Grid item lg={1}> <div style={styles.align}> <ReadMessage/>   </div></Grid>
                        <Grid item lg={2}>  <div style={styles.bgColor1}>
                            <img style={styles.image} src={KristinWatson} /><p style={styles.paragraph}>KristinWatson</p>
                        </div>
                        </Grid>
                        <Grid item lg={3}> <div style={styles.align}><Button1 text="Stuck" backgroundColor="#D50000" /></div></Grid>
                        <Grid item lg={2}> <div style={styles.date}><DateButton text='Jan 4 - Apr 26' backgroundColor='linear-gradient(90deg, #00C853 50.51%, #424242 50.52%)' /></div></Grid>
                        <Grid item lg={2}> <div style={styles.budgets}>$154,110</div></Grid>
                        <Grid item lg={2}><div style={styles.icon}><Icons icon="!!!" backgroundColor="#00C853" /></div></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <hr />
            <Grid container spacing={4}>
                <Grid item lg={4}><div style={{ margin: ' 30px 30px 0px' }}>Project3</div></Grid>
                <Grid item lg={8}>
                    <Grid container spacing={6}>
                        <Grid item lg={1}> <div style={styles.align}> <ReadMessage/>  </div></Grid>
                        <Grid item lg={2}>  <div style={styles.bgColor1}>
                            <img style={styles.image} src={TrevorHansen} /><p style={styles.paragraph}>TrevorHansen</p>
                        </div>
                        </Grid>
                        <Grid item lg={3}> <div style={styles.align}><Button1 text="At Risk" backgroundColor="#FF6D00" /></div></Grid>
                        <Grid item lg={2}> <div style={styles.date}><DateButton text='Feb 8 - Mar 12' backgroundColor='linear-gradient(90deg, #FF6D00 70.31%, #424242 70.32%)'  /></div></Grid>
                        <Grid item lg={2}> <div style={styles.budgets}>$5,000</div></Grid>
                        <Grid item lg={2}><div style={styles.icon}><Icons icon="!!!" backgroundColor="red" /></div></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <hr />
            <Grid container spacing={4}>
                <Grid item lg={4}><div style={{ margin: ' 30px 30px 0px' }}>Project3</div></Grid>
                <Grid item lg={8}>
                    <Grid container spacing={6}>
                        <Grid item lg={1}> <div style={styles.align}> <ReadMessage/>   </div></Grid>
                        <Grid item lg={2}>  <div style={styles.bgColor1}>
                            <img style={styles.image} src={JaneHancock} /><p style={styles.paragraph}>JaneHancock</p>
                        </div>
                        </Grid>
                        <Grid item lg={3}> <div style={styles.align}><Button1 text="Healthy" backgroundColor="#00C853" /></div></Grid>
                        <Grid item lg={2}> <div style={styles.date}><DateButton text='Feb 8 - March 26' backgroundColor='linear-gradient(90deg, #00C853 50.51%, #424242 50.52%)' /></div></Grid>
                        <Grid item lg={2}> <div style={styles.budgets}>$12,500</div></Grid>
                        <Grid item lg={2}><div style={styles.icon}><Icons icon="!!!" backgroundColor="red" /></div></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <hr />
            <Grid container spacing={4}>
                <Grid item lg={4}><div style={{ margin: ' 30px 30px 0px' }}>Project3</div></Grid>
                <Grid item lg={8}>
                    <Grid container spacing={6}>
                        <Grid item lg={1}> <div style={styles.align}> <ReadMessage/>   </div></Grid>
                        <Grid item lg={2}>  <div style={styles.bgColor1}>
                            <img style={styles.image} src={EleanorPena} /><p style={styles.paragraph}>EleanorPena</p>
                        </div>
                        </Grid>
                        <Grid item lg={3}> <div style={styles.align}><Button1 text="Stuck" backgroundColor="#D50000" /></div></Grid>
                        <Grid item lg={2}> <div style={styles.date}><DateButton text='Feb 8 - March 26' backgroundColor= 'linear-gradient(90deg, #D50000 89.57%, #424242 89.58%)'/></div></Grid>

 
                        <Grid item lg={2}> <div style={styles.budgets}>$9,000</div></Grid>
                        <Grid item lg={2}><div style={styles.icon}><Icons icon="!!!" backgroundColor="#00C853" /></div></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <hr />
            <Grid container spacing={4}>
                <Grid item lg={4}><div style={{ margin: ' 30px 30px 0px' }}>Project3</div></Grid>
                <Grid item lg={8}>
                    <Grid container spacing={6}>
                        <Grid item lg={1}> <div style={styles.align}> <ReadMessage/>   </div></Grid>
                        <Grid item lg={2}>  <div style={styles.bgColor1}>
                            <img style={styles.image} src={JacobJones} /><p style={styles.paragraph}>jacob jones</p>
                        </div>
                        </Grid>
                        <Grid item lg={3}> <div style={styles.align}><Button1 text="Healthy" backgroundColor="#00C853" /></div></Grid>
                        <Grid item lg={2}> <div style={styles.date}><DateButton text='Feb 8 - March 26' backgroundColor='linear-gradient(90deg, #00C853 50.51%, #424242 50.52%)' /></div></Grid>
                        <Grid item lg={2}> <div style={styles.budgets}>$12,500</div></Grid>
                        <Grid item lg={2}><div style={styles.icon}><Icons icon="!!!" backgroundColor="red" /></div></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <hr />
            <Grid container spacing={4}>
                <Grid item lg={4}><div style={{ margin: ' 30px 30px 0px' }}>Project3</div></Grid>
                <Grid item lg={8}>
                    <Grid container spacing={6}>
                        <Grid item lg={1}> <div style={styles.align}> <ReadMessage/>  </div></Grid>
                        <Grid item lg={2}>  <div style={styles.bgColor1}>
                            <img style={styles.image} src={JaneHancock} /><p style={styles.paragraph}>Jane Hancock</p>
                        </div>
                        </Grid>
                        <Grid item lg={3}> <div style={styles.align}><Button1 text="Done" backgroundColor="#00C853" /></div></Grid>
                        <Grid item lg={2}> <div style={styles.date}><DateButton text='Jan 4 – Feb 12'/></div></Grid>
                        <Grid item lg={2}> <div style={styles.budgets}>$12,000</div></Grid>
                        <Grid item lg={2}><div style={styles.icon}><Icons icon="!!!" backgroundColor="#D50000"  /></div></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <hr />
            <Grid container spacing={4}>
                <Grid item lg={4}><div style={{ margin: ' 30px 30px 0px' }}>Project3</div></Grid>
                <Grid item lg={8}>
                    <Grid container spacing={6}>
                        <Grid item lg={1}> <div style={styles.align}> <ReadMessage/>   </div></Grid>
                        <Grid item lg={2}>  <div style={styles.bgColor1}>
                            <img style={styles.image} src={KristinWatson} /><p style={styles.paragraph}>KristinWatson</p>
                        </div>
                        </Grid>
                        <Grid item lg={3}> <div style={styles.align}><Button1 text="Done" backgroundColor="#00C853" /></div></Grid>
                        <Grid item lg={2}> <div style={styles.date}><DateButton text='Jan 1 – Feb 1'  /></div></Grid>
                        <Grid item lg={2}> <div style={styles.budgets}>$18,000</div></Grid>
                        <Grid item lg={2}><div style={styles.icon}><Icons icon="!!!" backgroundColor="#FF6D00" /></div></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <hr />
        </div>
    )
}

export default project