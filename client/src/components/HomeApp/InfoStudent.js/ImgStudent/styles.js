import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    grid: {
        display: 'flex',
        justifyContent: 'center',
    },
    wrapperImg: {
        padding: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
        fontSize: 22,
        color: '#3F51B5',
        fontWeight: 'bold',
        marginBottom: 16,
    },
    img: {
        backgroundColor: 'rgb(255, 255, 255, 0.8)',
        borderRadius: 4,
        width: '100%',
        // "xs", "sm", "md"
        [theme.breakpoints.down("xs")]: {
            borderRadius: 4,
            width: '50%',
        },
    },
}))