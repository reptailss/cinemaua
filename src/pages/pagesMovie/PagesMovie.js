import React,{useEffect} from 'react';

import {useParams} from 'react-router-dom'
import {useDispatch} from "react-redux"
import {Col, Container, Row} from "react-bootstrap"

import {setMovieId} from '../../redux/slice/movieSlice'


import Actors from '../../containers/actors/Actors'
import SidebarMovie from '../../containers/sidebarMovie/SidebarMovie'
import Review from '../../containers/review/Review'
import VideoMovie from '../../containers/videoMovie/VideoMovie'
import SimilarMovie from "../../containers/similarMovie/SimilarMovie"
import withMovie from '../../HOC/withMovie/WithMovie'

import Accor from '../../compontents/accor/Accor'

import MovieView from "../../UI/movieView/MovieView"


import styles from './pagesMovie.module.scss'




const PagesMovie = () => {

    const {movieId} = useParams();
    const Movie = withMovie(MovieView, 382, movieId,);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMovieId(movieId))
    }, [])

    const breakpoints = {
        50: {
            slidesPerView: 2,
        },

        400: {
            slidesPerView: 3,
        },
        600: {

            slidesPerView: 5,
        },
        900: {

            slidesPerView: 7,
        },
        1200: {

            slidesPerView: 7,
        },
    }


    return (
        <>
            <div className={'pb-5'}>

                <Movie/>

                <Container>
                    <Row className='justify-content-between mt-4'>
                        <Col xl={9}><Actors movieId={movieId}/></Col>
                        <Col className={styles.marginTop70} xl={3}>
                            <SidebarMovie movieId={movieId}/>
                        </Col>
                        {/*<Col className={styles.marginTop}  xl={9}>*/}
                            {/*<VideoMovie movieId={movieId}/>*/}
                        {/*</Col>*/}
                        <Col className={styles.marginTop} xl={9}>
                            <Accor expanded title={'Reviews'}>
                                <Review movieId={movieId}/>
                            </Accor>
                        </Col>
                        <Col className={styles.marginTop} xl={9}>
                            <div className={styles.similar}>
                                Similar Movie
                            </div>
                           <SimilarMovie breakpointsProp={breakpoints} />
                        </Col>
                    </Row>


                </Container>


            </div>

        </>

    )
};

export default PagesMovie;