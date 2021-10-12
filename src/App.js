import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import {Switch, Route} from "react-router-dom";
import {routeHome} from './Route/index';
import HomeTemplate from './Container/HomeTemplate';
import PageNotFound from './Container/PageNotFound';
import SignUp from './Container/HomeTemplate/SignUp';
import SignIn from './Container/HomeTemplate/SignIn';
import { ToastContainer} from 'react-toastify';
import BookingPage from './Container/HomeTemplate/BookingPage';

function App() {

  const showLayoutHome = (route) => {
    if(route && route.length > 0)
    {
      return route.map((item, index) => {
        return (
          <HomeTemplate key={index} path={item.path} Component={item.component} exact={item.exact}/>
        )
        
      })
    }
  };


  return (
    <div>
      
      <Router>
      <ToastContainer
      
     
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover/>
        <Switch>
          {showLayoutHome(routeHome)}

       
          <Route path='/sign-in/' component={SignIn}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/booking/:id' component={BookingPage}/>
          
          <Route path='' component={PageNotFound}/>
         
        </Switch>

       
        
      </Router>
    </div>
  );
}

export default App;
