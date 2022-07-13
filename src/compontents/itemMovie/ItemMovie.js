import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux"

import {setMovieId} from "../../redux/slice/movieSlice"


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import pathImg from '../../utils/pathImg'
import sliceString from "../../utils/sliceString"

import PlugImg from '../../resources/img/plugimg.png'

import styles from './itemMovie.module.scss'


const ItemMovie = ({title, name, poster_path, backdrop_path, vote_average, id}) => {

    const dispatch = useDispatch()

    const onChangeMovieId = (id) => {
        dispatch(setMovieId(id))
    }


    const imgMovie = poster_path ? pathImg(poster_path) : backdrop_path ? pathImg(backdrop_path) : PlugImg;
    const titleMovie = title ? sliceString(title) : name ? sliceString(name) : 'нет имени'

    const scroll = () => {
        window.scrollTo(0, 0)
    }

    return (

        <Card
            className={styles.root}
            onClick={() => {
                onChangeMovieId(id)

            }}
        >


            <Tooltip arrow placement="top" title="more">
                <CardMedia
                    component="img"
                    className={styles.images}
                    image={imgMovie}
                    alt={titleMovie}/>
            </Tooltip>
            <Link style={{textDecorationLine: 'none'}} to={`movie/${id}`}>
                <Button style={{
                    width: '100%',
                    height: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }} variant="contained">link</Button>
            </Link>

            {/*<Rating size="small"*/}
                    {/*className={styles.rating}*/}
                    {/*readOnly*/}
                    {/*name="customized-10"*/}
                    {/*defaultValue={vote_average ? vote_average : null}*/}
                    {/*max={10}/>*/}
            {/*<CardContent className={styles.box}>*/}
                {/*<Typography*/}
                            {/*variant="h7"*/}
                            {/*component="div"*/}
                            {/*className={styles.title}>*/}
                    {/*{titleMovie}*/}
                {/*</Typography>*/}

            {/*</CardContent>*/}

        </Card>

    );
};

export default ItemMovie;

