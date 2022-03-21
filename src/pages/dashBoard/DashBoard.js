
import { styles } from './DashBoardStyle'
import Button from '../../component/button/Button'
import SearchBar1 from '../../component/searchBar1/SearchBar1'
import SearchBar from '../../component/searchBar/SearchBar'
import { Grid } from '@mui/material'
import Icons1 from '../../component/icons1/Icons1'
import JaneHancock from '../../assets/JaneHancock.jpg'
import iconButton from '../../assets/Icon Button.png'
import Project from '../../component/project/Project'
import Dialog from '../../component/dialog/dialog'


function DashBoard() {

  return (
    <div style={styles.mainContainer}>
      <Grid container spacing={4}>
        <Grid item lg={6}>
          <div style={styles.display}>
            <Button text="+ Create" width="100px" height='36px' />  <SearchBar />
          </div>

        </Grid>
        <Grid item lg={6}>
          <div style={styles.display2}>
            <img src={iconButton} alt="errors" />
            <img style={styles.image1} src={JaneHancock} />
          </div>
        </Grid>
      </Grid>
      <div style={{ display: 'flex', justifyContent: "start", }} >
        <Icons1 />
        <div style={styles.subContainer}>
          <div style={styles.subDiv}>
            <h3 style={styles.heading}>Internal Projects</h3>
            <p style={styles.paragraph}>Project Portfolio</p>
            <div style={styles.display}>
              <SearchBar1 />

              <Dialog />
              <div style={styles.box}>...</div>
            </div>

            <div style={styles.bgColor}>

              <Grid container spacing={4}>

                <Grid item lg={5}><input style={styles.input1} type="number" placeholder='PROJECT' /> </Grid>
                <Grid item lg={7}>
                  <div style={styles.display1}>
                    <input style={styles.input} type="number" placeholder='OWNER' />
                    <input style={styles.input} type="number" placeholder='STATUS' />
                    <input style={styles.input} type="number" placeholder='TimeLine' />
                    <input style={styles.input} type="number" placeholder='BUDGET' />
                    <select id="value">
                      <option value="PRIORITY">PRIORITY</option>
                    </select>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div><Project/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard