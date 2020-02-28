import React, {Fragment, Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ListaInmuebles from "./components/views/ListaInmuebles";
import registerUser from './components/security/registerUsers';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from './theme/theme';
import AppNavbar from "./components/layout/AppNavbar";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from '@material-ui/core';
import login from './components/security/login';

class App extends Component{
  render(){
    return(
      <Router>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <AppNavbar/>
            <Grid container>

              <Switch>
                <Route path="/" exact component={ListaInmuebles}></Route>
                <Route path="/registerUser" exact component={registerUser}></Route>
                <Route path="/login" exact component={login} ></Route>
              </Switch>

            </Grid>
        </MuiThemeProvider>
      </Router>
    )
  }
}
 
export default App;
