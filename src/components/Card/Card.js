import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const CustomCard = ({ data }) => {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={data.avatar}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{data.first_name + " " + data.last_name}</Typography>
                    <Typography gutterBottom > {data.email} </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CustomCard;