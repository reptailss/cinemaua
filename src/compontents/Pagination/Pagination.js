import React from 'react';
import ReactPaginate from 'react-paginate';

import {useSelector,useDispatch} from "react-redux"
import {setPage} from '../../redux/slice/filterSlice'


import styles from './Pagination.module.scss';


const Pagination = () => {

    const {totalPage} = useSelector(state => state.filter)

    const dispatch = useDispatch()

const onPageChange = (event) => {
dispatch(setPage(event))
    window.scrollTo(0, 0)
}
    return (
        <div className={styles.inner}>
            <ReactPaginate
                className={styles.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => onPageChange(event.selected +1)}
                pageRangeDisplayed={5}
                pageCount={totalPage}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );

}
    export default Pagination;