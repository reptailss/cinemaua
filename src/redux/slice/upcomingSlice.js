
import {createSlice, PayloadAction,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    status: 'loading',
    page: 1,
    totalPage : 1,
    upcomingMovie: [],
    upcomingMoviesId: [],


}

export const fetchUpcomingMovie = createAsyncThunk(
    'upcoming/fetchUpcomingMovie',
    async ( api) => {
        return await api

    }
);




export const upcomingSlice = createSlice({
    name: 'upcoming',
    initialState,
    reducers: {
        setUpcomingMovie(state, action) {
            state.upcomingMovie = action.payload
        },


        setPage(state, action) {
            state.page = action.payload
        },


    },
    extraReducers: {

        [fetchUpcomingMovie.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchUpcomingMovie.fulfilled]: (state, action) => {
            state.upcomingMovie = action.payload.results;
            state.totalPage = action.payload.total_pages;
            // state.upcomingMoviesId = [...state.upcomingMoviesId,action.payload.results.id];
            state.status = 'success'


        },
        [fetchUpcomingMovie.rejected]: (state) => {
            state.status = 'error'
        },


    }

})


export const {setUpcomingMovie,setPage} = upcomingSlice.actions;

export default upcomingSlice.reducer;