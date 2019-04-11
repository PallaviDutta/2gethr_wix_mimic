import React, { Fragment } from 'react';
import Tab from '@material-ui/core/Tab';
import { Grid } from '@material-ui/core';

export default props =>
    <Fragment style={{ backgroundColor: 'red' }}>
        <Grid container style={{ textAlign: 'center', marginTop: '30%' }}>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
                <h3><u>Privacy Policy</u></h3>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
                <h3><u>2gethr App</u></h3>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
                <div>
                    <i className="facebook f icon"></i>
                    <i className="twitter icon"></i>
                    <i className="instagram icon"></i>
                </div>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    </Fragment>