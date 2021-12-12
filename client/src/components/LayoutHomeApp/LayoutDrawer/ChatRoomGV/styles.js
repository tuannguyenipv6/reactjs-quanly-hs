import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    titleEditInfo: {
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