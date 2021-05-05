import Http from "../utils/http.util";
import {MoviesSearched} from "../models/MovieSearched";

export enum EnumMovieType {
    movie = 'movie',
    series = 'series',
    episode = 'episode'
}

export type TypesMovieType = 'movie' | 'series' | 'episode'

const genType = (type?: TypesMovieType) => type ? `&type=${type}` : '';
const genPage = (page?: number) => {
    if (page && (page < 0 || page > 100)) return ''
    return page ? `&page=${page}` : ''
};

export class OmdbHttp {
    private static instance: OmdbHttp

    private constructor() {
    }

    public static getInstance(): OmdbHttp {
        if (!OmdbHttp.instance) {
            OmdbHttp.instance = new OmdbHttp()
        }
        return OmdbHttp.instance
    }

    async getMoviesBySearch(search: string, type?: TypesMovieType, page?: number): Promise<MoviesSearched> {
        const movies: MoviesSearched = await Http.get(`?s=${search}${genType(type)}${genPage(page)}`)
        return movies
    }

    async getMoviesById(id: string): Promise<MoviesSearched> {
        const movies: MoviesSearched = await Http.get(`?i=${id}`)
        return movies
    }

}
