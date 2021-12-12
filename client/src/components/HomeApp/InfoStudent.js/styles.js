import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    '@keyframes slideInIn': {
        '0%': {
            transform: 'translateY(100%)',
        },
        '100%': {
            transform: 'translateY(0)',
        },
    },
    card: {
        animation: '$slideInIn ease 0.7s',
        backgroundColor: 'rgb(53, 53, 53, 0.8)',
    },
}))