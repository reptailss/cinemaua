import React from 'react';

import {Col, Container, Row} from 'react-bootstrap'

import SeachMovie from "../../containers/searchMovie/SeachMovie"
import SearchInput from "../../compontents/searchInput/SearchInput"

import styles from './pageSearch.module.scss'


const PageSearch = () => {

    return (
        <>
            <Container style={{maxWidth: '1000px'}} className='mt-4'>
                <Row className={styles.root}>
                    <Col xl={9}>
                       <SearchInput/>
                    </Col>
                    <Col xl={12}>
                        <SeachMovie/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PageSearch;