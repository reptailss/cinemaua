
import {createSlice, PayloadAction,createAsyncThunk} from '@reduxjs/toolkit'

import  MoviedbService from '../../services/MoviedbService'


const moviedbService = new MoviedbService;

const initialState = {
    movieId: 453395,
    movie: {},
    status: 'loading',
}

export const fetchMovie = createAsyncThunk(
    'movie/fetchMovie',
    async id => {
        return await moviedbService.getMovie(id)
    }
);


export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovieId(state, action) {
            state.movieId = action.payload
        },
        setMovie(state, action) {
            state.movie = action.payload
        },

    },
    extraReducers: {

        [fetchMovie.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchMovie.fulfilled]: (state, action) => {
            state.movie = action.payload;
            state.status = 'success'

        },
        [fetchMovie.rejected]: (state) => {
            state.status = 'error'
        },


    }

})


export const {setMovieId,setMovie} = movieSlice.actions;

export default movieSlice.reducer;