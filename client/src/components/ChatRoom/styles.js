import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    wrapperChatRoom: {
        display: 'flex',
        flexDirection: 'column',
    },
    marginBottom: {
        [theme.breakpoints.up('sm')]: {
            marginBottom: 28,
        },
        marginBottom: 50,
    },
    wrapperInput: {
        display: 'flex',
        // bottom: 12,
        alignItems: 'center',
        position: 'fixed',
        bottom: 8,
        right: 8,
        left: 8,
        border: '1px solid rgb(91, 159, 237, 0.7)',
        padding: '0 4px',
        backgroundColor: '#3A3A3A',
        borderRadius: 4,
        [theme.breakpoints.up('sm')]: {
            left: 250,
        },
    },
    input: {
        flex: 1,
        border: 'none',
        outline: 'none',
        padding: 4,
        color: 'rgb(255, 255, 255, 0.8)',
        fontSize: 18,
        backgroundColor: 'transparent',
    },
    icon: {
        color: 'rgb(255, 255, 255, 0.8)',
        '&:hover': {
            color: '#fff'
        }
    }
}))