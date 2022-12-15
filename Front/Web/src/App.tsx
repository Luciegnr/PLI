import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/page/index';
import Suivi from '../src/page/consultations';
import Log from '../src/page/signin';
import Inscription from '../src/page/signup';
import RdvPage from './page/rdv'
import Patient from '../src/page/patient'
import Profil from '../src/page/profil'
import config from "./Config/config" 
import ProtectedRoute from "./Components/ProtectedRoute";

// Appel des diffèrentes routes a afficher
export default function App() {
  const TrueOrFalse = localStorage.getItem('user_auth');
  const [isAuth]= useState(TrueOrFalse);
    return (
      <Router>
      <Switch>
        <Route path= {config.path.path_home} component={Home} exact />
        <Route path= {config.path.path_signin} component={Log} exact />
        <Route path= {config.path.path_signup} component={Inscription} exact />

        <ProtectedRoute path= {config.path.path_suivi} component={Suivi} isAuth={isAuth} authPath='/signin' exact />
        <ProtectedRoute path= {config.path.path_myrdv} component={RdvPage} isAuth={isAuth} authPath='/signin' exact />
        <ProtectedRoute path= {config.path.path_patient} component={Patient} isAuth={isAuth} authPath='/signin' exact />
        <ProtectedRoute path= {config.path.path_profil} component={Profil} isAuth={isAuth} authPath='/signin' exact />

      </Switch>
    </Router>
    );
  }


