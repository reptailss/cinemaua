import {useDispatch, useSelector} from "react-redux"
import {useGetFilteredMovieQuery} from '../../services/MovieService'
import {setTotalPage} from '../../redux/slice/filterSlice'

import ErrorMessage from '../../compontents/errorMessage/ErrorMessage'
import ListSearch from "../../compontents/listSearch/ListSearch"
import Pagination from "../../compontents/Pagination/Pagination"


const FilterMovie = () => {

    const dispatch = useDispatch()

    const {filterProps} = useSelector(state => state.filter)
    const {page, totalPage} = useSelector(state => state.filter)

    const {order, video, releaseGte, releaseLte, sort, withGenres} = filterProps;
    const genresString = withGenres.toString();

    const {data, error} = useGetFilteredMovieQuery({
        filterProps: {...filterProps, withGenres: genresString}, page
    })

    if (data) {
        dispatch(setTotalPage(data.total_pages))
    }

    const NoResults = () => {
        return (
            <div style={{color: 'white'}} className='mt-2 p-xl-3'>
                No results
            </div>
        )
    }

    console.log(data)
    const dataResults = data ? data.results : [];

    const content = error ?
        <ErrorMessage/> :
        <ListSearch lengtOverview={350} data={dataResults}/>

        const pagination = data ? data.total_pages > 1 ? <Pagination/> : null : null

    return (
        <>
            {!dataResults.length > 0 ? <NoResults/> : null}
            {content}
            {pagination}
        </>
    )


};

export default FilterMovie;



