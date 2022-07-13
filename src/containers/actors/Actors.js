import React, {useEffect, useState} from 'react';

import {Container} from "react-bootstrap"

import MoviedbService from '../../services/MoviedbService'

import SliderActors from '../../compontents/sliderActor/SliderActor'


const moviedbService = new MoviedbService;

const Actors = ({movieId}) => {


    const [actors, setActors] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {

        movieUpdate(movieId)
    }, [])


    const movieUpdate = () => {

        if (!movieId) {
            return
        }
        onMovieLoading();
        moviedbService.getActors(movieId).then((res) => {
            onMovieLoaded(res.cast)
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
        setActors(res)



    }

    const {name, profile_path, character, id} = actors;


    return (
        <div className={'actors'}>
            <div className={'pb-2 pt-2'}>
                <div className="title">Starring</div>
                <SliderActors
                    data={actors}
                    slidesPerView={7}
                    spaceBetween={10}
                />

            </div>

        </div>

    )
};

export default Actors;