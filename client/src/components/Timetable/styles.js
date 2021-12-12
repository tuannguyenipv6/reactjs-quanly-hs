import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    '@keyframes slideInIn': {
        '0%': {
            transform: 'translateX(-100%)',
        },
        '100%': {
            transform: 'translateX(0)',
        },
    },
    card: {
        animation: '$slideInIn ease 0.7s',
        backgroundColor: 'rgb(53, 53, 53, 0.8)',
    },


    gridItem: {
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',       
    },
    cardWrapper:{
        width: '100%',
    },
    wrapperTitle: {
        padding: '8px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#3F51B5',
        backgroundColor: 'rgb(255, 255, 255, 0.8)'
    },
    wrapperConten: {
        margin: '0 4px 4px 4px',
    },
    row: {
        display: 'flex',
        color: '#3F51B5',
    },
    column: {
        padding: '4px 12px',
        flex: 2,
        textAlign: 'center',
        border: '1px solid #3F51B5',
        color: '#3F51B5',
    },
}))