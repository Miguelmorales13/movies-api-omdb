import React, {FunctionComponent, useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {OmdbHttp} from "../http/Omdb.http";
import {Movie} from "../models/Movie";
import {makeStyles, Paper} from "@material-ui/core";
import MovieDetails from "../components/MovieDetails";

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '90vh',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },

}))

const MoviePage: FunctionComponent<Props> = (props) => {
    const omdbHttp = OmdbHttp.getInstance()
    const classes = useStyles()
    const [movie, setMovie] = useState<Movie>({})
    const params: any = useParams()
    const history = useHistory()
    const handleMovie = async () => {
        if (!params.id) {
            history.push('/')
        }
        const movieWanted = await omdbHttp.getMoviesById(params.id)
        console.log(movieWanted)
        setMovie(movieWanted)
    }
    useEffect(() => {
        handleMovie()
    }, [])
    return (
        <Paper className={classes.root}>
            <MovieDetails movie={movie}/>
        </Paper>
    );
};

export default MoviePage;
