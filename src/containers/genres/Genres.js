import MoviedbService from '../../services/MoviedbService'

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"

import {fetchGenres, setGenre} from '../../redux/slice/filterSlice'

import styles from './genres.module.scss'


const moviedbService = new MoviedbService();

const Genres = () => {

    const {genres,filterProps} = useSelector(state => state.filter)
    const dispatch = useDispatch()


    const api = moviedbService.getGenres()

    useEffect(() => {
        dispatch(fetchGenres(api))
    }, [])


    const genresItems = genres.map((item) => {

        if (!genres) {
            return
        }
        const {name, id} = item;

        const clazz = filterProps.withGenres.includes(id) ? styles.item + ' ' + styles.active : styles.item


        return (
            <div onClick={() => dispatch(setGenre(id))}
                 className={clazz}
                 key={id}>
                {name}</div>

        )
    })


    return (
        <div className={styles.list}>
            {genresItems}
        </div>
    );
};

export default Genres;