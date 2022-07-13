import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {

    filterProps: {
        sort: 'popularity',
        order: 'desc',
        releaseGte: '2016-02-08',
        releaseLte: '2020-02-08',
        video: 'false',
        withGenres: [],

    },
    searchValue: '',
    genres: [],
    statusGenres: 'loading',
    page: 1,
    totalPage : 1,
}


export const fetchGenres = createAsyncThunk(
    'filter/fetchGenres',
    async (api) => {
        return await api

    }
);


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload
        },
        setTotalPage(state, action) {
            state.totalPage = action.payload
        },
        setSearch(state, action) {
            state.searchValue = action.payload
        },
        setSort(state, action) {
            state.filterProps.sort = action.payload
        },
        setVideo(state, action) {
            state.filterProps.video = action.payload
        },
        setReleaseGte(state, action) {
            state.filterProps.releaseGte = action.payload
        },

        setReleaseLte(state, action) {
            state.filterProps.releaseLte = action.payload
        },
        setGenre(state, action) {
            const genres = state.filterProps.withGenres;
           const index = genres.indexOf(action.payload);
            if (index !== -1) {
                genres.splice(index, 1);
            } else{
                genres.push(action.payload)
            }

        },
    },


    extraReducers: {
        [fetchGenres.pending]: (state) => {
            state.statusGenres = 'loading'
            console.log('loading')
        },
        [fetchGenres.fulfilled]: (state, action) => {
            state.genres = [];
            state.genres = action.payload.genres;
            state.statusGenres = 'success'
        },
        [fetchGenres.rejected]: (state) => {
            state.statusGenres = 'error'
        },

    }


})


export const {setSearch, setSort, setVideo, setReleaseGte, setReleaseLte, setGenre,setPage,setTotalPage} = filterSlice.actions;

export default filterSlice.reducer;