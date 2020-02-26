import React, { Component, Fragment } from 'react';
import { Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    sectionDektop: {
        display: 'none',
        [theme.breakpoints.up('md')] : {
            display: 'flex'
        }
    },
    sectionMobile:{
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    grow:{
        flexGrow: 1
    }
});

class BarSession extends Component {
    render() {

        const { classes } = this.props;

        return (
            <Fragment>
                <Toolbar>
                    <IconButton color="inherit">
                        <i className="material-icons">menu</i>
                    </IconButton>
                    <Typography variant="h6">
                        VAXI HOMES
                    </Typography>
                    <div className={classes.grow}></div>
                    <div className={classes.sectionDektop}>
                        <Button color = 'inherit'>Login</Button>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton color = 'inherit'>
                            <i className='material-icons'>
                                more_vert
                            </i>
                        </IconButton>
                    </div>
                </Toolbar>
            </Fragment>
        )
    }
}

export default withStyles(styles) (BarSession); 