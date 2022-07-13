class MoviedbService {

    _apiBase = 'https://api.themoviedb.org'
    _apiKey = 'api_key=7c13cc2803d0d00cde4e1204943bf67a'


    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`could not fetch' ${url}, stats: ${res.status}`)
        }

        return await res.json();
    }


    getConfiguration = async () => {
        return await this.getResource(`${this._apiBase}/3/configuration?${this._apiKey}`);

    }



    getMovie = async (id) => {
        return await this.getResource(`${this._apiBase}/3/movie/${id}?${this._apiKey}&language=en-US`);

    }



    getActors = async (id) => {
        return await this.getResource(`${this._apiBase}/3/movie/${id}/credits?${this._apiKey}&language=en-US`);

    }


    getMovieSimilar = async (id) => {
        return await this.getResource(`${this._apiBase}/3/movie/${id}/similar?${this._apiKey}&language=en-US&page=1`);

    }


    getGenres = async () => {
        return await this.getResource(`${this._apiBase}/3/genre/movie/list?${this._apiKey}&language=en-US`);

    }

    getLastMovie = async () => {
        return await this.getResource(`${this._apiBase}/3/movie/latest?${this._apiKey}&language=en-US`);

    }

    getRatingMovie = async () => {
        return await this.getResource(`${this._apiBase}/3/guest_session/1/rated/movies?${this._apiKey}&language=en-US&sort_by=created_at.asc`);

    }

    getTrendingMovie = async (time) => {
        return await this.getResource(`${this._apiBase}/3/trending/movie/${time}?${this._apiKey}`);

    }


    getReviewMovie = async (id) => {
        return await this.getResource(`${this._apiBase}/3/movie/${id}/reviews?${this._apiKey}&language=en-US&page=1`);

    }

    getVideoMovie = async (id) => {
        return await this.getResource(`${this._apiBase}/3/movie/${id}/videos?${this._apiKey}&language=en-US`);

    }


    getSearchMovie = async (value,page) => {
        return await this.getResource(`${this._apiBase}/3/search/movie?${this._apiKey}&language=en-US&query=${value}&page=${page}&include_adult=false`);

    }


    getFilterMovie = async (page,sort,order,video,releaseGte,releaseLte,withGenres) => {
        return await this.getResource(`${this._apiBase}/3/discover/movie?${this._apiKey}&language=en-US&sort_by=${sort}.${order}&include_adult=false&include_video=${video}&page=${page}&release_date.gte=${releaseGte}&release_date.lte=${releaseLte}&with_genres=${withGenres}`);

    }

    getUppcomingMovie = async (page) => {
        return await this.getResource(`${this._apiBase}/3/movie/upcoming?${this._apiKey}&language=en-US&page=${page}`);

    }



}

export default MoviedbService;