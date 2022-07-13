import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {setReleaseGte, setReleaseLte, setSort, setVideo} from '../../redux/slice/filterSlice'


import SelectButtons from '../selectButtons/SelectButtons'
import Accor from "../accor/Accor"
import DateInput from '../dateInput/DateInput'

import styles from './sort.module.scss'
import Genres from "../../containers/genres/Genres"


const dataSelectSort = [{value: 'popularity', title: 'Popular'}, {value: 'voice_averege', title: 'Rating'}]
const dataSelectVideo = [{value: 'true', title: 'YES'}, {value: 'false', title: 'NO'}]

const Sort = () => {

    const dispatch = useDispatch();

    const {filterProps} = useSelector(state => state.filter)

    const {sort, order, video, releaseGte, releaseLte} = filterProps;

    const onChangeSort = (value) => {
        dispatch(setSort((value)))
    }

    const onChangeVideo = (value) => {
        dispatch(setVideo((value)))
    }
    const onChangeDateGte = (date) => {
        dispatch(setReleaseGte(date))
    }

    const onChangeDateLte = (date) => {
        dispatch(setReleaseLte(date))
    }


    return (
        <div className={styles.inner}>
            <div className={styles.item}>

                <Accor title={'Sort'}>
                    <div className={styles.title}>
                        Sort results by
                    </div>
                    <div className={styles.select}>
                        <SelectButtons onChangeValue={onChangeSort}
                                       defaulValue={'popular'}
                                       defaultTitle={'Popular'}
                                       data={dataSelectSort}/>
                    </div>
                </Accor>

            </div>
            <div className={styles.item}>
                <Accor title={'Filters'}>

                    <div className={styles.item}>
                        <div className={styles.title}>
                            show only with video
                        </div>
                        <div className={styles.select}>
                            <SelectButtons onChangeValue={onChangeVideo}
                                           defaulValue={'false'}
                                           defaultTitle={'NO'}
                                           data={dataSelectVideo}/>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.title}>
                            Release dates
                        </div>
                        <div className={styles.select}>
                            <div className={styles.h3}>
                                of
                            </div>
                            <div className={styles.input}>
                                <DateInput
                                    dateProp={releaseGte}
                                    onChangeDateValue={onChangeDateGte}
                                />
                            </div>
                        </div>
                        <div className={styles.select}>
                            <div className={styles.h3}>
                                prior to
                            </div>
                            <div className={styles.input}>
                                <DateInput
                                    dateProp={releaseLte}
                                    onChangeDateValue={onChangeDateLte}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.title}>
                            Genres
                        </div>
                        <div className={styles.select}>
                            <div className={styles.input}>
                               <Genres/>
                            </div>
                        </div>
                    </div>


                </Accor>

            </div>


        </div>
    );
};

export default Sort;