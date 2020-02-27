import React, { Component } from 'react'
import { Container, Avatar, Typography, Grid, TextField, Button } from '@material-ui/core';
import LockOutLineIcons from '@material-ui/icons/LockOutlined';
const style = {
    paper : {
        marginTop : 8,
        display : 'flex',
        flexDirection : 'column',
        alignItem : 'center'
    },
    avatar : {
        margin : 8,
        backgroundColor : '#e53935'
    },
    form : {
        width : '100%',
        marginTop: 10     
    },
    submit : {
        marginTop: 15,
        marginBottome: 20
    }
}
export default class registerUser extends Component {

    state = {
        user : {
            name : '',
            lastName : '',
            email : '',
            password : ''
        }
    }

    handleChange = (e) => {
        let user = {...this.state.user}
        user[e.target.name] = e.target.value;
        this.setState({user})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.user)
    }

    render() {
        return (
            <Container maxWidth='md'>
                <div style={style.paper}>
                    <Avatar style={style.avatar}>
                        <LockOutLineIcons/>
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Register account please
                    </Typography>
                    <form style={style.form}>

                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <TextField onChange={this.handleChange} required value={this.state.user.name} name='name' fullWidth label='Enter your name'></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField onChange={this.handleChange} required value={this.state.user.lastName} name="lastName" fullWidth label="Enter your last name"></TextField>
                            </Grid>
                        </Grid>
                            
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <TextField onChange={this.handleChange} required value={this.state.user.email} name="email" fullWidth label="Enter your e-mail"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField onChange={this.handleChange} required value={this.state.user.password} name="password" type='password' fullWidth label="Enter your password"></TextField>
                            </Grid>
                        </Grid>

                        <Grid container justify="center">
                            <Grid item md={6} xs={12}>
                                <Button onClick={this.handleSubmit} type="submit" variant="contained" fullWidth size="large" color="primary" style={style.submit}>Register</Button>
                            </Grid>
                        </Grid>

                    </form>
                </div>
            </Container>

        )
    }
}
