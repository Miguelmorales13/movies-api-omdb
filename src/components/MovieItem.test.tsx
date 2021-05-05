import React from "react";
import {render} from "@testing-library/react";
import MovieItem from "./MovieItem";
import {MovieSearched} from "../models/MovieSearched";

describe('<MovieItem/>', () => {
    it('params Movie searched', () => {
        const movie: MovieSearched = {
            imdbID: 'tt0848228',
            Year: '2012',
            Title: 'The Avengers',
            Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            Type: 'movie'
        }
        const component = render(<MovieItem movie={movie}/>)

        component.getByText('2012')
        component.getByText('The Avengers')
    })
})
