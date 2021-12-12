import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    cardGhiChu: {
        backgroundColor: 'rgb(53, 53, 53, 0.8)',
        margin: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleGhiChu: {
        color: '#3F51B5',
        fontWeight: 'bold',
        textDecoration: 'underline',
        marginBottom: 12,
    },
    wrapperTextField: {
        width: '100%',
        padding: 12,
        color: '#fff',
    },
}))