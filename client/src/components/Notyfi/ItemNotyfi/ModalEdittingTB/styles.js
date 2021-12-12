import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    modal: {
        borderRadius: 4,
        display: 'flex',
        width: 300,
        margin: '8px 12px 0 8px',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            padding: '12px 12px 0 12px',
            width: 500,
        },
    },
    contenModal: {
        border: '2px solid #3F51B5',
        borderRadius: 4,
        padding: 12,
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        '& span': {
            color: '#3F51B5',
            display: 'flex',
            '& h3': {
                fontWeight: 'bold',
                marginLeft: 4,
            }
        },
    },
    conten: {
        alignSelf: 'center',
    },
    titleDate: {
        alignSelf: 'flex-end',
        fontSize: 12
    },
    button: {
        alignSelf: 'flex-end',
        margin: '8px 0',
    }
}))