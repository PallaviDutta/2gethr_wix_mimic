import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default props =>
    <AppBar position="static" style={{ background: '#FFFFFF' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Typography variant="headline" style={{ display:'flex',flex: '5', fontSize: '40px',justifyContent:'center'}}>
                
                <strong>
                    <span style={{ color: 'yellow' }}>2</span>
                    <span style={{ color: 'grey' }}>gethr</span>
                </strong>
                
            </Typography>
            <Typography style={{ display: 'flex', flex: '5', alignSelf: 'center', justifyContent: 'space-evenly'}}>
                <div><strong><span style={{ fontSize: '20px' }}>Home</span></strong></div>
                <div><strong><span style={{ fontSize: '20px' }}>About</span></strong></div>
                <div><strong><span style={{ fontSize: '20px' }}>Contact Us</span></strong></div>
            </Typography>
            <Typography style={{backgroundColor:'orange',flex:'1'}}></Typography>
        </Toolbar>
    </AppBar>