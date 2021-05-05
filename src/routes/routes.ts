import {IRoute} from "../models/IRoute";
import HomePage from "../pages/HomePage";
import SeriesPage from "../pages/SeriesPage";
import MoviePage from "../pages/MoviePage";
import EpisodesPage from "../pages/EpisodesPage";

export default [
    {
        component: HomePage,
        name: 'home',
        path: '/',
        exact: true
    }, {
        component: MoviePage,
        name: 'movie-id',
        path: '/movie/:id',
        exact: true
    }, {
        component: SeriesPage,
        name: 'series',
        path: '/series',
        exact: true
    }, {
        component: EpisodesPage,
        name: 'episodes',
        path: '/episodes',
        exact: true
    }
] as IRoute[]
