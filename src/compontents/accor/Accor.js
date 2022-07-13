import * as React from 'react';
import Accordion  from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import style from './accor.module.scss'



const Accor = ({title,children}) => {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    className={style.root}
                    expandIcon={<ExpandMoreIcon   className={style.icon} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography color={'white'}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails className={style.root}>
                    {children}
                </AccordionDetails>
            </Accordion>

        </>
    );
}

export default Accor;