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
        display: 'flex',
        flexDirection: 'column',
        padding: 8,
    },
    title: {
        alignSelf: 'center',
        padding: 8,
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'
    },
    wrapperInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 24px',
        color: 'white',
        marginBottom: 12,
    },
    item: {
        display: 'flex',
    },
    itemInfo0: {
        minWidth: 100,
        color: '#A0A0A0',
    },
    itemInfo: {
        fontWeight: 'bold',
    },

    table: {
        minWidth: 650,
    },
    tableTableHead: {
        backgroundColor: '#0099cc'
    },
    colorTableHead: {
        color: '#fff'
    },
}))