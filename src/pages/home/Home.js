import {Col, Container, Row} from 'react-bootstrap'
import {useSelector} from "react-redux"
import {useCallback  } from 'react'

import TrendingMovie from '../../containers/trendingMovie/TrengingMovie'
import SimilarMovie from '../../containers/similarMovie/SimilarMovie'
import TrailerMovie from "../../containers/trailerMovie/TrailerMovie"

import withMovie from '../../HOC/withMovie/WithMovie'
import WithUpcoming from '../../HOC/withUpcoming/WithUpcoming'

import MovieInfoView from "../../UI/movieInfoView/MovieInfoView"


import style from './home.module.scss'
import React from "react"


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

        slidesPerView: 4,
    },
}

const Home = () => {

    const movieId = useSelector(state => state.movie.movieId)

    const InfoMovie = withMovie(MovieInfoView, 382, movieId);

    const UpcomingTrailerMovie = useCallback(    WithUpcoming(TrailerMovie),[]);








    return (
        <>
            <Container style={{maxWidth: '1000px'}} fluid>
                <Row>

                    <Col xl={12}>
                        <TrendingMovie/>
                    </Col>

                </Row>
                <div className={style.movieRandom}>
                    <Row className={style.movieRandomRow} sm='justify-content-center'
                         xl='justify-content-between'>

                        <Col xl={12}>
                            <div className={style.title}>
                                Random popular movie
                            </div>
                        </Col>
                        <Col xl={5}>

                        </Col>

                        <Col className={style.popularMovie} xl={7}>
                            <InfoMovie/>
                            <div className={style.similar}><SimilarMovie breakpointsProp={breakpoints}/></div>


                        </Col>
                        <Col xl={12}>
                            <UpcomingTrailerMovie/>

                        </Col>
                    </Row>

                </div>

            </Container>


        </>
    )
}

export default Home;
