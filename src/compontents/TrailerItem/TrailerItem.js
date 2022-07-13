import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"

import MoviedbService from '../../services/MoviedbService'


import style from './trailerItem.module.scss'
import PlayIcon from "../../resources/icons/playIcon/PlayIcon"
import Modal from "../modal/Modal"
import YouTube from 'react-youtube';


const moviedbService = new MoviedbService;

const TrailerItem = ({id, index}) => {

    const [trailer, setTrailer] = useState('');
    const [play, setPlay] = useState(false);

    const {upcomingMovie,status} = useSelector(state => state.upcoming)


    useEffect(() => {
        if (status === 'success' && id) {
            moviedbService.getVideoMovie(id).then((res) => {
                setTrailer(res.results[0]);
            }).catch(() => {

            })


        }


    }, [status])


    if (!id) {
        return
    }

    const {key, name} = trailer;



    const srcImg = `https://i.ytimg.com/vi/${key ? key : 'HhIl_XJ-OGA'}/hqdefault.jpg`

    const img = status === 'success'? <img className={style.img} src={srcImg} alt=""/> : null;


    const video = play ? <YouTube
        videoId={key}
    /> : null


    const onOpen = (open) => {
        setPlay(open)
    }


    return (


        <>
            <div className={style.item}>

                {img}

                <Modal classNameButtonClick={style.btn} ButtonClick={PlayIcon} onOpen={onOpen}>
                    <YouTube
                        videoId={key}
                    />
                </Modal>
                <div className={style.title}>
                    {name}
                </div>

            </div>
        </>

    )


};

export default TrailerItem;