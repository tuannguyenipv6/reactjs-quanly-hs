import React from 'react';
import ToastMessage from './components/ToasMessage.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/index.js';
import NotFound from './components/NotFound/NotFound.js';
import { HOME_APP } from './constant.js';
import LayoutHomeApp from './components/LayoutHomeApp/index.js';
import { userState$ } from './redux/selectors'; 
import { useSelector } from 'react-redux';
import CommonModal from '../src/components/CommonModal';
// import axios from 'axios';

function App() {
  const userState = useSelector(userState$);

  // React.useEffect(() => {
  //   axios({
  //     method: 'POST',
  //     url: `http://localhost:5000/user/name-gvcn`,
  //     data: { 
  //       mMSL: 123456,
  //     }
  //   }).then((response) => {
  //     if(response) {
  //       console.log('data từ server:', response.data)
  //     }else {
  //       console.log('không có!')
  //     }
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }, []); 

  const renderHomeApp = () => {
    let xhtml = null;
    xhtml = HOME_APP.map(route => {
      return (
        <LayoutHomeApp
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      )
    })
    return xhtml;
  }

  return (
    <BrowserRouter>
      <CommonModal />
      <Switch>
        <Route component={Login} exact={true} path='/login'></Route>
        {userState.checkLogin ? renderHomeApp() : ''}
        {/* {renderHomeApp()} */}
        <Route component={NotFound} path=''></Route>
      </Switch>
      <ToastMessage />
    </BrowserRouter>
  );
}

export default App;

// ???