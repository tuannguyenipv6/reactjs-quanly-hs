import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    modal: {
        display: 'flex',
        flexDirection: 'column',
        padding: 4,
    },
    wrapperTitle: {
        display: 'flex',
        alignItems: 'center',
        padding: 4,
        marginRight: 24,
    },
    spanTitle: {
        marginRight: 24,
        fontSize: 16,
    },
    spanDate: {
        color: '#3F51B5',
        alignSelf: 'end',
        margin: '4px 2px'
    },
    textFieldTitle: {
        margin: '4px 0',
        display: 'flex',
        alignItems: 'end'
    },
    txtTenTB: {
        flex:1, 
        margin: '0 8px 0 24px',
        '& input': {
            fontSize: 16,
            padding: 4,
        }

    },
    textFieldConten: {
        display: 'flex',
        flexDirection: 'column',
        margin: '12px 4px',
    },
    txtconten: {
        minWidth: 300,
        minHeight: 100,
        padding: 8,
        borderRadius: 4,
        borderColor: '#3F51B5',
        [theme.breakpoints.up('sm')]: {
            minWidth: 500,
        },
    }
}))