import React, { useState } from 'react'
import Messages from '../messages/Messages';
import MessageIcon from '@mui/icons-material/Message';
import zIndex from '@mui/material/styles/zIndex';
import DashBoard from '../../pages/dashBoard/DashBoard';

function ReadMessage() {
    const [open, setOpen] = useState(false);

    return (



        <div>
            <div onClick={() => setOpen(true)}>
                <MessageIcon   maxWidth='158px' text="+ Create Project" height="48px"  />
                
            </div>
            {
                open &&
                <div style={{
                    position: "absolute",
                    top: '90%',
                    right: '-10%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '190'
                }}

                ><Messages setOpen={setOpen} />
               

                </div>
            }
        </div>
    )

}

export default ReadMessage