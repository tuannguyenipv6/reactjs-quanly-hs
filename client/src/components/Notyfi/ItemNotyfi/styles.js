import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    wrapper: {
        backgroundColor: 'rgb(53, 53, 53, 0.8)',
        color: 'white',
    },

    wrapperHeader: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        '& span': {
            color: '#3F51B5',
            display: 'flex',
            '& h3': {
                fontWeight: 'bold',
                marginLeft: 4,
            }
        }
    },
    titleTB: {
        alignSelf: 'center',
    },
    titleDate: {
        alignSelf: 'flex-end',
        fontSize: 12,
    },
    wrapperConten: {
        width: '100%',
    },
    conten: {
        border: '2px solid #3F51B5',
        padding: 12,
        margin: '4px 12px 0 12px',
        borderRadius: 4,
    },
}))