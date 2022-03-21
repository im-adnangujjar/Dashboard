import React from 'react'
import { styles } from './Icons1Style'
import icon from '../../assets/Icon.png'
import icon1 from '../../assets/Icon (1).png'
import icon2 from '../../assets/Icon (2).png'
import icon3 from '../../assets/Icon (3).png'
import icon4 from '../../assets/Icon (4).png'
import icon5 from '../../assets/Icon (5).png'
import icon6 from '../../assets/Icon (6).png'
import icon7 from '../../assets/Icon (7).png'
import last from '../../assets/lastIcon.png'
import Tooltip from '@mui/material/Tooltip';

function Icons1() {
  return (
    <div>
      <div style={styles.display1}>
        <div>
          <hr style={styles.line} />
          <div style={styles.display}>
          <Tooltip title="tooltip">
            <img style={styles.image} src={icon} alt='error' />
            </Tooltip>
            <Tooltip title="tooltip">
            <img style={styles.image} src={icon1} alt='error' />
            </Tooltip>
          </div>
          <hr style={styles.line} />
          <div style={styles.display}>
          <Tooltip title="tooltip">
            <img style={styles.image} src={icon2} alt='error' />
            </Tooltip>
          </div>
          <hr style={styles.line} />
          <div style={styles.display}>
          <Tooltip title="tooltip">
            <img style={styles.image} src={icon3} alt='error' />
            </Tooltip>
            <Tooltip title='tooltip'>
            <img style={styles.image} src={icon4} alt='error' />
            </Tooltip>
            <Tooltip title='tooltip'>
            <img style={styles.image} src={icon5} alt='error' />
            </Tooltip>

          </div>
          <hr style={styles.line} />

          <div style={styles.display}>
          <Tooltip title='tooltip'>
            <img style={styles.image} src={icon6} alt='error' />
            </Tooltip>
            <Tooltip title='tooltip'>
            <img style={styles.image} src={icon7} alt='error' />
            </Tooltip>
          </div>
          <hr style={styles.line} />
        </div>
        
        <div>
          <hr  style={styles.line}/>
          <img style={styles.image1} src={last} />
        </div>

      </div>
    </div>
  )
}

export default Icons1