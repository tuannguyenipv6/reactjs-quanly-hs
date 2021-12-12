import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        padding: 4,
        flexDirection: 'column',
        color: 'rgb(255, 255, 255, 0.8)',
    },
    hidden: {
        alignSelf: 'center',
    },
    title: {
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
        fontSize: 20,
        color: '#3F51B5',
        fontWeight: 'bold',
    },
    cardItem: {
        backgroundColor: 'transparent',
        padding: 8,
        color: '#5563b3',
        fontWeight: '300',
        marginBottom: 12,
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: 8,
    },
    subheader: {
        fontSize: 16,
        padding: 4,
    },
    itemInfo: {
        display: 'flex',
        padding: 4,
        '& h3': {
            minWidth: 100,
            cursor: 'default',
        },
        '& span': {
            color: 'rgb(255, 255, 255, 0.8)',
        }
    },
    btnLink: {
        padding: 0,
    },
    link: {
        padding: '7px 21px',
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