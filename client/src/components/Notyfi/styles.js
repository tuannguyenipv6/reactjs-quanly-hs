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
        backgroundColor: 'transparent',
    },
    fab: {
        position: 'fixed',
        bottom: 48,
        right: 72,
    },

    root: {
        width: '100%',
    },
}))