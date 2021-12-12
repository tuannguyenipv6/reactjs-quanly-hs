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
    grid: {
        animation: '$slideInIn ease 1s',
        // transition: 'transform 1s ease',
    },
    card: {
        '&:hover': {
            transform: 'translateY(-2px)',
            border: '2px solid #5B9FED',
        },
        transition: 'transform 0.3s ease, border 0.3s ease',
        border: '2px solid rgb(53, 53, 53, 0.6)',
        borderRadius: 8,
        backgroundColor: 'transparent',
    },
    cardcontent: {
        padding: '4px !important',
        backgroundColor: 'rgb(53, 53, 53, 0.8)',
        // backgroundColor: 'rgb(241, 243, 244)', rgb(53, 53, 53) #5B9FED
    },
    cardheader: {
        padding: '16px 16px 4px 16px',
        '& span': {
            color: '#fff',
        }
    },
    avatar: {
        backgroundColor: '#262625',
    },
    button: {
        marginLeft: '4%',
        fontWeight: 'bold',
        padding: '4px 24px',
        color: '#5B9FE',
    },

    titleEdit: {
        margin: '4px 32px 4px 0',
        padding: 8,
    },
    typography: {
        padding: 8,
        fontSize: 16,
        color: 'rgb(0, 0, 255, 0.7)',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#F1F3F4',
            color: 'blue',
            textDecoration: 'underline',
            borderRadius: 6
        }
    },
}))