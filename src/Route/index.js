
import CinemaPage from '../Container/HomeTemplate/CinemaPage';
import DetailPage from '../Container/HomeTemplate/DetailPage';
import HomePage from '../Container/HomeTemplate/HomePage';
import ListMoviePage from '../Container/HomeTemplate/ListMoviePage';
import UserPage from '../Container/HomeTemplate/UserPage';


const routeHome = [
    {
        path: '/',
        component: HomePage,
        exact: true,
    },
  
    
    {
        path: '/detail-movie/:id',
        component: DetailPage,
        exact: false,
    },
    {
        path: '/list-movie',
        component: ListMoviePage,
        exact: false,
    },
    {
        path: '/info-user',
        component: UserPage,
        exact: false,
    },
    {
        path: '/cum-rap',
        component: CinemaPage,
        exact: false,
    },

    
    

]




export {routeHome};