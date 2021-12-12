import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    wrapper: {
        minWidth: '370px',
        margin: 0,
        padding: 0,
        fontFamily: 'Raleway sans-serif',
        fontWeight: '300',
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        backgroundImage: 'linear-gradient(0, #FFF, #9EB2CD)',
    },
    title: {
      fontSize: 22,
      color: '#000',
      margin: '0px 8px',
      paddingTop: '10px',
      fontWeight: 'bold',  
    },
    header: {
        padding: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        '& h3': {
            marginLeft: '12px',
            borderBottom: '1px solid #9EB2CD',
            color: '#333',
        }
    },
    wrapperInfo: {
        display: 'flex',
        fontSize: 18,
        alignItems: 'center',
        marginLeft: 4,
    },

}))