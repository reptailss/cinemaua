import React, {useEffect, useState} from 'react';

import MoviedbService from '../../services/MoviedbService'

import ItemMovie from "../itemMovie/ItemMovie"
import SkeletonMoivie from '../skeletonMovie/SkeletonMovie'


import {Button} from "react-bootstrap"


const moviedbService = new MoviedbService;

const LastMovie = () => {


    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {

        movieUpdate()
    }, [])


    const movieUpdate = () => {
        onMovieLoading();
        moviedbService.getLastMovie().then((res) => {
            onMovieLoaded(res);
        })
            .catch(() => {
                setError(true)
            })
    }

    const onMovieLoading = () => {
        setLoading(true);
    }

    const onMovieLoaded = (res) => {
        setLoading(false)
        setError(false)
        setMovie(res)
    }


    const {backdrop_path, poster_path, title, name, vote_average, release_date} = movie;

    return (
        <div>
            <div className="fw-bold fs-5 mt-2">
                Last added movie:
            </div>
            <Button
                className="mb-3"
                variant="outline-primary"
                onClick={() => {
                    movieUpdate()
                }}
            >request
            </Button>
            {loading ? <SkeletonMoivie/> :
                <ItemMovie
                    name={name}
                    posterImg={poster_path}
                    backdropImg={backdrop_path}
                    title={title}
                    rating={vote_average}
                    ralease={release_date}
                />}

        </div>
    );
};

export default LastMovie;