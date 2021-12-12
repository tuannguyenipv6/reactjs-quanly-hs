import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    header: {
        backgroundColor: 'rgb(41, 41, 41)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 12px',
        borderBottom: '1px solid #E5E5E5'
    },
    title: {
        '&:hover': {
            cursor: 'pointer',
        },
        padding: '3px 12px',
        fontSize: '30px',
        fontWeight: 'normal',
        textAlign: 'Center',
        textTransform: 'uppercase',
        fontFamily: 'Monoton, cursive',
    },
    wrapperListItem: {
        padding: '12px 0',
        borderBottom: '1px solid #E5E5E5'
    },
    item: {
        '&:hover': {
            color: '#fff',
            cursor: 'pointer',
        },

        border: 'none',
        borderRadius: '2px',
        margin: 2,
        display: 'flex',
        alignItems: 'center',
        color: '#A0A0A0',
        padding: '5px 4px 5px 28px',
        width: 'calc(100% - 4px)',
        backgroundColor: 'transparent',
    },
    itemActive: {
        backgroundColor: '#3F3F3F',
        color: '#fff',
    },
    wrapperContactGV: {
        padding: '12px 0',
        '& h3': {
            marginLeft: 2,
            color: '#A0A0A0',
            marginBottom: 8,
        }
    },
    itemName: {
        fontSize: 16,
        marginLeft: 4,
    },
    wrapperLogout: {
        width: '100%',
        padding: '12px 0',
        borderTop: '1px solid #E5E5E5',
        position: 'absolute',
        bottom: 10,
    },
}))