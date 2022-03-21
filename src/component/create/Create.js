
import * as React from 'react';
import { styles } from './CreateStyle'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': ' ,Switch demo' } };
function Create() {
    return (
        <div>
            <p style={styles.paragraph}>Please provide one or more NAICS classification codes.</p>
            <div style={styles.display}>
                <div>
                    <Switch {...label} defaultChecked />
                </div>
                <div>
                    <h1 style={styles.heading}>Minority Owned Business</h1>
                </div>
            </div>
            <p style={styles.paragraph} >Is this company a 51% minority-owned business? </p>
            <div style={styles.display}>
                <div>
                    <Switch {...label} defaultChecked />
                </div>
                <div>
                    <h1 style={styles.heading} >Woman Owned Business</h1>
                </div>
            </div>
            <p style={styles.paragraph}>Is this company a 51% woman-owned business? </p>
            <div style={styles.display}>
                <div>
                    <Switch {...label} defaultChecked />
                </div>
                <div>
                    <h1 style={styles.heading} >Certified SLBE Business</h1>
                </div>
            </div>
            <p style={styles.paragraph}>Are you certified as an SLBE? </p>
        </div>

    );
}

export default Create