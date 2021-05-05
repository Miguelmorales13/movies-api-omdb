import React, {FunctionComponent} from 'react';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

interface OwnProps {
}

type Props = OwnProps;

const Theme: FunctionComponent<Props> = ({children}) => {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#151515',
                light: '#151515',
                dark: '#151515',
                contrastText: '#fff'
            },
            secondary: {
                main: "#f7a440",
                light: "#f7a440",
                dark: "#f7a440",
                contrastText: '#fff'
            }
        }
    });
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default Theme;
