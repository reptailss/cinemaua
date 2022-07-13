import React from 'react';
import {useDispatch} from "react-redux"
import {setMovieId} from "../../redux/slice/movieSlice"

import {Col, Row} from 'react-bootstrap'

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import pathImg from '../../utils/pathImg'
import PlugImg from '../../resources/img/plugimg.png'
import sliceString from '../../utils/sliceString'


import styles from './itemSearch.module.scss'
import {Link} from "react-router-dom"


const ItemSearch = ({title, name, poster_path, backdrop_path, id, overview,lengtOverview}) => {

    const dispatch = useDispatch()

    const onChangeMovieId = (id) => {
        dispatch(setMovieId(id))
    }

    const imgMovie = poster_path ? pathImg(poster_path) : backdrop_path ? pathImg(backdrop_path) : PlugImg;
    const titleMovie = title ? title : name ? name : 'нет имени'

    const overviewDesc = lengtOverview  ? sliceString(overview, lengtOverview) : overview;

    return (
        <>
            <div
                className={styles.root}
                onClick={() => {
                    onChangeMovieId(id)
                }}>
                <Row className={styles.row}>
                    <Col className={styles.innerImg} xl={3}>
                        <Link className={styles.link} to={`../movie/${id}`}>
                            <Tooltip arrow placement="right" title="more">
                                <CardMedia
                                    component="img"
                                    className={styles.images}
                                    image={imgMovie}
                                    alt={titleMovie}/>
                            </Tooltip>
                        </Link>
                    </Col>
                    <Col xl={9}>
                        <CardContent className={styles.box}>
                            <Typography
                                variant="h7"
                                component="div"
                                className={styles.title}>
                                {titleMovie}
                            </Typography>

                            <div className="mt-1  text px-3">
                                {overview ? overviewDesc : 'no review'}
                            </div>
                        </CardContent>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ItemSearch;

