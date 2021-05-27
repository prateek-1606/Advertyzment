import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import Card from '../Card/Card';

const Dashboard = ({ data }) => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Grid container spacing={3}>
                {data.map((dataitem) => (<Grid xs={12} sm={6} md={4} item >
                    <Card data={dataitem} />
                </Grid>))}
            </Grid>
        </div>
    )
}

export default Dashboard