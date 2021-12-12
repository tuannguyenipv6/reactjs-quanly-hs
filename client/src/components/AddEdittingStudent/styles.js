import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    '@keyframes slideInIn': {
        '0%': {
            transform: 'translateY(100%)',
        },
        '100%': {
            transform: 'translateY(0)',
        },
    },
    card: {
        animation: '$slideInIn ease 0.7s',
        backgroundColor: 'rgb(53, 53, 53, 0.8)',
    },
    gridHidden: {
        display: 'flex',
        justifyContent: 'center',
    },
    gridImg: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 24,
        justifyContent: 'center',
    },
    img: {
        backgroundColor: 'rgb(255, 255, 255, 0.3)',
        borderRadius: 4,
        width: '100%',
        // "xs", "sm", "md"
        [theme.breakpoints.down("xs")]: {
            borderRadius: 4,
            width: '50%',
        },
    },
    wrapperChoosefile: {
        color: '#fff',
        marginTop: 8,
    },
    choosefile: {
        borderRadius: 4,
        borderBottom: '2px solid #3F51B5',
        padding: 4,
    },

    gridDetails: {
        display: 'flex',
        flexDirection: 'column',
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
        [theme.breakpoints.up('sm')]: {
            marginRight: 12,
        },
    },
    subheader: {
        fontSize: 16,
        padding: 4,
    },
    details: {
        // margin: 12,
    },
    textFieldInput: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 12,
        marginBottom: 12,
        '& span': {
            minWidth: 110,
        },
        '& h3': {
            marginRight: 12,
        },
        '& input': {
            backgroundColor: 'transparent',
            padding: 2,
            paddingLeft: 12,
            flex: 1,
            border: 'none',
            borderBottom: '1px solid #3F51B5',
            outline: 'none',
            borderRadius: 4,
            color: '#FFFFFF',
        }
    },
    radioGroup: {
        display: 'flex',
    },
    details2: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    btnOk: {
        margin: '12px 20%'
    }
}))