

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


import pathImg from '../../feature/pathImg'
import sliceString from "../../feature/sliceString"


import PlugImg from '../../resources/img/plugimg.png'

const ItemActor = ({name,profile_path,character, id}) => {


    const imgActor = profile_path ? pathImg(profile_path) : PlugImg;
    const titleActor = name ? sliceString(name,20) : 'нет имени'

    return (

        <Card

            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: 200,
                color: 'white',
                padding: '10px',
                backgroundColor: 'rgba(255,255, 255, 0.1)'

            }}>

            <CardMedia
                component="img"
                style={{height: 110}}
                image={imgActor}
                alt={titleActor}/>


            <CardContent>
                <Typography gutterBottom
                            variant="h7"
                            component="div"
                            style={{fontSize: '15px',
                                textAlign: 'center'}}>
                    {titleActor}
                </Typography>
            </CardContent>

        </Card>

    );
};

export default ItemActor;

