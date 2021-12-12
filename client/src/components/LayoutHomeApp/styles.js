import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;
export default makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        backgroundColor: 'rgb(41, 41, 41, 0.8)',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        [theme.breakpoints.down("xs")]: {
            padding: 0,
            paddingTop: theme.spacing(2),
        },
    },
    icon: {
        color: '#fff',
    },
    avatar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        cursor: 'default',
    },
}))