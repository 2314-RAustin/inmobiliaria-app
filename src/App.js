import React, {Fragment, Component} from 'react';
import './App.css';
import ListaInmuebles from "./components/views/ListaInmuebles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from './theme/theme';

class App extends Component{
  render(){
    return(
    <MuiThemeProvider theme={theme}>
      <ListaInmuebles/>
    </MuiThemeProvider>
    )
  }
}

export default App;
