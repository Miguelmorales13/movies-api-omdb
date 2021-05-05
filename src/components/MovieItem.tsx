import React, {FunctionComponent} from 'react';
import {Box, Card, CardContent, CardMedia, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import {MovieSearched} from "../models/MovieSearched";
import {useHistory} from 'react-router-dom'

interface OwnProps {
    movie: MovieSearched
}

type Props = OwnProps;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        minHeight: theme.spacing(30),
        cursor: 'pointer'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 300,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}))
const MovieItem: FunctionComponent<Props> = ({movie}) => {
    const classes = useStyles()
    const theme = useTheme()
    const isLg = useMediaQuery(theme.breakpoints.up('lg'))
    const history = useHistory()
    const handleClick = () => {
        history.push(`/movie/${movie.imdbID}`)
    }

    return (
        <Box p={1} mt={3}>
            <Card className={classes.root} onClick={handleClick}>
                {!isLg && <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {movie.Title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {movie.Year}
                        </Typography>
                    </CardContent>

                </div>}
                <CardMedia
                    className={classes.cover}
                    image={movie.Poster}
                    title={movie.Title}
                />

            </Card>
        </Box>
    );
};

export default MovieItem;
