import React, { Component , Fragment} from 'react'
import AppBar from "@material-ui/core/AppBar";
import BarSession from './bar/BarSession';

export default class componentName extends Component {
    render() {
        return (
            <Fragment>
                <AppBar position='static'>
                    <BarSession/>
                </AppBar>
            </Fragment>
        )
    }
}