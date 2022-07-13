import './movielist.scss'
import React from "react"
import {Col, Container, Row} from 'react-bootstrap'

import SkeletonMoivie from '../skeletonMovie/SkeletonMovie'
import ItemMovie from '../itemMovie/ItemMovie'




const ListMovie = ({data,loading,onMovieId }) => {




       const itemsMovie = data.map((item, i) => {

            const {backdrop_path,poster_path, title, name, vote_average, release_date,id} = item;

            if (i > 15) {
                return
            }
            return <Col xl="6" className='align-items-stretch'  style={{marginTop: '25px'}}
                key={id}
            >

                {loading || !data ? <SkeletonMoivie/> :
                    <ItemMovie
                        name={name}
                        posterImg={poster_path}
                        backdropImg={backdrop_path}
                        title={title}
                        rating={vote_average}
                        ralease={release_date}
                        id={id}
                        onMovieId={onMovieId}
                    />}
            </Col>;
        });



    return (

        <Container>
            <Row style={{alignItems: 'flex start'}}>
                {itemsMovie}
            </Row>
        </Container>


    )


}

export default ListMovie;
