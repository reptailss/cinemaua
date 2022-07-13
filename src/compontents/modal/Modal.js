import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Modal as Mod} from '@mui/material/';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Modal = ({children,onOpen,ButtonClick,classNameButtonClick}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true)
        onOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        // onOpen(false)
    }

    return (
        <div>
            <ButtonClick className={classNameButtonClick} onClick={handleOpen}>Open modal</ButtonClick>
            <Mod
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Button style={{position: 'absolute', top: '10px', right: '10px',}} onClick={handleClose}><CloseIcon style={{fill:'white'}}/></Button>
                    {children}
                </Box>
            </Mod>
        </div>
    );
}

export default Modal;