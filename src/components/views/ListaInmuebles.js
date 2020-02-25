import React, { Component, Fragment } from 'react'
import Button from "@material-ui/core/Button";

export default class ListaInmuebles extends Component {
    render() {
        return (
            <Fragment>
                <Button variant="contained" color="primary">Button primario</Button>
                <Button variant="contained" color="secondary">Button secundario</Button>
            </Fragment>
        )
    }
}
