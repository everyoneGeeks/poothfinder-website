import React from 'react';
import Login from "./componet/login/Login";
import TypeLogin from "./componet/login/TypeLogin";
import Register from "./componet/register/Register";
import Favorite  from "./componet/Favorite/Favorite";
import Category  from "./componet/Category/Category";
import Subscription from "./componet/register/Subscription";
import AdSubscription from "./componet/Adregister/AdSubscription";
import AdRegister from "./componet/Adregister/AdRegister";
import AdLogin from "./componet/Adlogin/AdLogin";
import Statics from "./componet/AdStatics/Statics";
import ReservationAd from "./componet/Reservations/ReservationAd";
import AcceptReservations from "./componet/AcceptReservations/AcceptReservations";


import Home from './componet/Home/Home';

import AdBooths from './componet/AdBooths/Booths';
import Type  from "./componet/Type/Type";
import Reservation  from "./componet/Reservation/Reservations";
import Info from "./componet/info/info"
import {Router,Switch, Route, Link} from "react-router-dom";
import { privateName } from '@babel/types';

import { createBrowserHistory  } from 'history';

const history = createBrowserHistory();


export default function Album() {

  return (
    <Router history={history} >

        <Switch>
          <Route exact path="/"  >
             <Home />
          </Route>
         
          <Route  path="/favorite" render={(props) => <Favorite {...props}/>}>
          </Route>

          <Route  path="/info/:id" render={(props) => <Info {...props}/>}>
          </Route>


          <Route  path="/category/:id" render={(props) => <Category {...props}/>}>
          </Route>

          <Route  path="/type/:id" render={(props) => <Type {...props}/>}>
          </Route>

           
          <Route  path="/reservation" render={(props) => <Reservation {...props}/>}>
          </Route>
          
          <Route  path="/typeLogin">
            <TypeLogin />
          </Route>

          <Route   path="/login">
            <Login   />
          </Route>

          <Route   path="/subscription">
            <Subscription   />
          </Route>

          
          <Route  path="/register">
            <Register />
          </Route>
          
          
        <Route   path="/advertiser/login">
            <AdLogin   />
          </Route>

          <Route   path="/advertiser/subscription">
            <AdSubscription   />
          </Route>

          
          <Route  path="/advertiser/register">
            <AdRegister />
          </Route>

          <Route exact path="/advertiser/booths"  >
             <AdBooths />
          </Route>
          
          <Route exact path="/advertiser/Statics"  >
             <Statics />
          </Route>
          
          
            <Route exact path="/advertiser/Reservations"  >
             <ReservationAd />
          </Route>
          
               <Route exact path="/advertiser/AcceptReservations"  >
             <AcceptReservations />
          </Route>       
          
          
        </Switch>

    </Router>
  );
}

