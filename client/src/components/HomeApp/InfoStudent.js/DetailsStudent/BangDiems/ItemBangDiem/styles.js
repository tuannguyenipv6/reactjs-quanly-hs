import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    
    backgroundRow: {
        backgroundColor: '#F0FFFF',
        '& .MuiTableCell-alignRight': {
            padding: 0,
        }
    },
    backgroundRow1: {
        backgroundColor: '#FFFFE1',
        '& .MuiTableCell-alignRight': {
            padding: 0,
        }
    },
    input: {
        '&:focus': {
            backgroundColor: '#E8E8E8',
            borderRadius: 4,
            maxWidth: 70,
            color: '#000 !important',
            textDecoration: 'none !important',
        },
        '&:hover': {
            color: 'blue',
            textDecoration: 'underline',
            backgroundColor: '#E8E8E8',
        },
        backgroundColor: 'transparent',
        padding: 12,
        maxWidth: 50,
        outline: 'none',
        border: 'none',
        color: '#000',
        textAlign: 'center',
    }
}))