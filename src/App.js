import React, {Fragment, Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ListaInmuebles from "./components/views/ListaInmuebles";
import registerUser from './components/security/registerUsers';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from './theme/theme';
import AppNavbar from "./components/layout/AppNavbar";
import Grid from "@material-ui/core/Grid";

class App extends Component{
  render(){
    return(
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavbar/>
            <Grid container>

              <Switch>
                <Route path="/" exact component={ListaInmuebles}></Route>
                <Route path="/registerUser" exact component={registerUser}></Route>
              </Switch>

            </Grid>
        </MuiThemeProvider>
      </Router>
    )
  }
}
 
export default App;
