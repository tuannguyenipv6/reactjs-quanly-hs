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
    wrapperMessageLeft: {
        animation: '$slideInIn ease 0.7s',
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: 4,
        maxWidth: '45%',
        color: '#000',
        position: 'relative',
    },
    wrapperMessageRight: {
        animation: '$slideInIn ease 0.7s',
        display: 'flex',
        // alignItems: 'center',
        marginBottom: 4,
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        maxWidth: '45%',
        color: '#000',
        position: 'relative',
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    conten: {
        backgroundColor: 'rgb(255, 255, 255, 0.8)',
        padding: 8,
        borderRadius: 8,
    },
    contenRight: {
        backgroundColor: 'rgb(229, 239, 255, 0.8)',
        padding: 8,
        borderRadius: 8,
    }
}));

/*
 * maxHeight: 100%,
 * overfolow-y: auto,
*/