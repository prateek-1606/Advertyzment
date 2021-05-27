import { AppBar, Button, Toolbar, Typography, CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';
import { GetUser } from '../../api';
import Dashboard from '../Dashboard/Dashboard';

const Home = () => {

    const classes = useStyles();
    const [data, setData] = useState(null);
    const [isloading, SetLoading] = useState(false);

    const getuser = () => {
        SetLoading(true);
        GetUser()
            .then((res) => {
                setData(res.data.data);
                SetLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <AppBar className={classes.appBar} position="static" >
                <Typography className={classes.heading} to="/" marginLeft="50" variant="h4" color='secondary' >
                    Advertyzment
            </Typography>
                <Toolbar>
                    <Button variant="contained" color="secondary" onClick={getuser} >Get Users</Button>
                </Toolbar>
            </AppBar>
            {data != null ? isloading ? (
                (<CircularProgress className={classes.root} />)
            ) : <Dashboard data={data} /> : null}
        </>
    )
}

export default Home;