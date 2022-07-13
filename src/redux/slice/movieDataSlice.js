
import {createSlice, PayloadAction,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    movieId: 453395,
    movieData: [] || {},
    status: 'loading',
    page: 1,
    totalPage : 1,

}

export const fetchMovieData = createAsyncThunk(
    'movieData/fetchMovieData',
    async ( api) => {
        return await api

    }
);




export const movieDataSlice = createSlice({
    name: 'movieData',
    initialState,
    reducers: {
        setMovieId(state, action) {
            state.movieId = action.payload
        },
        setMovieData(state, action) {
            state.movieData = action.payload
        },
        setPage(state, action) {
            state.page = action.payload
        },


    },
    extraReducers: {

        [fetchMovieData.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchMovieData.fulfilled]: (state, action) => {
            state.movieData = action.payload.results;
            state.totalPage = action.payload.total_pages;
            state.status = 'success'


        },
        [fetchMovieData.rejected]: (state) => {
            state.status = 'error'
        },


    }

})


export const {setMovieId,setMovieData,setPage} = movieDataSlice.actions;

export default movieDataSlice.reducer;