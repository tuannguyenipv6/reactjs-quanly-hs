import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;
export default makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        height: 70,
        backgroundColor: 'rgb(30, 30, 30, 0.8)',
        display: 'flex',
        justifyContent: 'center', 
    },
    menuButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    handleLoadPage: {
        display: 'flex',
        justifyContent: 'start',
        flex: 3,
        [theme.breakpoints.up('sm')]: {
            flex: 1,
        },
    },
    iconButton: {
        '&:hover': {
            cursor: 'default',
            color: '#fff',
        },
        color: '#A0A0A0',
        padding: 6,
    },
    search: {
        width: '60%',
        display: 'flex',
        flex: 9,
        // [theme.breakpoints.up('sm')]: {
            
        // },
    },
    input: {
        color: '#fff',
        width: '100%',
        cursor: 'text',
        marginLeft: '3%',
        padding: 12,
        borderRadius: 18,
        border: 'none',
        backgroundColor: '#353535',
        outline: 'none',
    },
    searchIcon: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 8,
        borderRadius: 18,
        color: '#A0A0A0',
        backgroundColor: '#353535',
        transform: 'translateX(-70%)',
        '&:hover': {
            color: '#fff',
            cursor: 'pointer',
        },
    },
    avatar: {
        display: 'flex',
        justifyContent: 'flex-end',
        cursor: 'default',
        flex: 1,
        marginRight: '-12px',
        [theme.breakpoints.up('sm')]: {
            flex: 3,
        },
    },
    titleEditInfo: {
        margin: '4px 32px 4px 0',
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
    typographyPH: {
        padding: theme.spacing(2),
    },
}))