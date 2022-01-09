import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";

const Header = () => {
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" style={linkStyle}>Home</Link>
                    <Link to="/liked" style={linkStyle}>Liked Photos</Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default Header;