import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {useTheme } from '@material-ui/core/styles';
import useStyles from './styles';
import { Route } from 'react-router-dom';
import LayoutDrawer from './LayoutDrawer';
import LayoutAppbar from './LayoutAppbar';
import { userState$, infodefaultState$ } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getInfodefault } from '../../redux/actions';

function LayoutHomeApp({ component, exact, path, name }, props) {

  const classes = useStyles();
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const userState = useSelector(userState$);
  const infodefaultState = useSelector(infodefaultState$);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    if (userState.checkLogin) {
      const { mMSL } = userState;
      dispatch(getInfodefault.getInfodefaultRequest({ mMSL }))
    } else console.log('chưa đăng nhập!');
  }, [userState, dispatch]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <LayoutAppbar handleDrawerToggle={handleDrawerToggle} userState={userState} infodefaultState={infodefaultState} />

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <LayoutDrawer name={infodefaultState.name} nameClass={infodefaultState.nameClass} />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <LayoutDrawer name={infodefaultState.name} nameClass={infodefaultState.nameClass} />
          </Drawer>
        </Hidden>
      </nav>
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route component={component} exact={exact} path={path} name={name}></Route>
      </main>
    </div>
  );
}

export default LayoutHomeApp;