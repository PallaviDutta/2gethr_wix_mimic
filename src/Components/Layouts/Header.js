import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default props =>
    <AppBar position="static" style={{ background: '#FFFFFF' }}>
        <Toolbar>
            <Typography variant="headline" style={{ marginLeft: '15%', fontSize: '40px' }}>
            <strong><span style={{ color: 'yellow' }}>2</span><span style={{ color: 'grey' }}>gethr</span></strong>
                <strong><span style={{ marginLeft: '150%', fontSize: '20px' }}>Home</span></strong>
                <strong><span style={{ marginLeft: '20%', fontSize: '20px' }}>About</span></strong>
                <strong><span style={{ marginLeft: '20%', fontSize: '20px' }}>Contact</span></strong>
                <strong><span style={{ marginLeft: '2%', fontSize: '20px' }}>Us</span></strong>
            </Typography>
        </Toolbar>
    </AppBar>