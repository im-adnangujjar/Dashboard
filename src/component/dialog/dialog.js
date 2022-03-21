
import React, { useState } from 'react'
import Button from '../../component/button/Button'
import Form from '../../pages/Form/Form'
import CloseIcon from '@mui/icons-material/Close';

import { styles } from '../searchBar1/SearchBar1Style';


export default function Dialog() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div onClick={() => setOpen(true)}>
                <Button width='158px' text="+ Create Project" height="48px" />
            </div>
            {
                open &&
                <div style={{
                    position: 'absolute',

                    top: '110%',
                    right: '-25%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 99
                }}

                ><Form  setOpen={setOpen} />
                    {/* <button onClick={() => setOpen(false)}><CloseIcon /></button> */}

                </div>
            }
        </div>
    )
}
