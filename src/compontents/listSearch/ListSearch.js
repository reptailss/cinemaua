import React from 'react';
import ItemSearch from "../itemSearch/ItemSearch"
import {Col, Row} from "react-bootstrap"
import SkeletonMovie from "../skeletonMovie/SkeletonMovie"


const ListSearch = ({data, status,lengtOverview}) => {

    const itemsMovie = data.map((item, i) => {
        if (i > 5) {
            return
        }
        return (
            <Col xl="12"
                 className='align-items-stretch'
                 style={{marginTop: '25px'}}
                 key={item.id}>
                <ItemSearch
                    lengtOverview={lengtOverview}
                    {...item}/>
            </Col>
        )
    });

    const skeletons = [...new Array(6)].map((_, index) => {
        return (

            <Col xl="12"
                 className='align-items-stretch'
                 style={{marginTop: '25px'}}
                 key={index}>
                <SkeletonMovie/>
            </Col>
        )
    });

    return (
        <Row style={{alignItems: 'flex start'}}>
            {status === 'loading' ? skeletons : itemsMovie}
        </Row>
    )
}

export default ListSearch;