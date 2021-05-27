import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        height: '5%'
    },
    heading: {
        textDecoration: 'none',
        fontFamily: 'Times New Romen',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    root: {
        margin: '50px 50%'
    },
}));