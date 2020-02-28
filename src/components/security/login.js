import React, { Component } from 'react';
import { Container, Avatar, Typography, TextField, Button } from '@material-ui/core';
import LockOutLineIcons from '@material-ui/icons/LockOutlined';

const style = {
    paper : {
        marginTop : 9,
        display : 'flex',
        flexDirection : 'column',
        alignItems: 'center'
    },
    avatar : {
        margin : 5,
        backgroundColor : 'red'
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

export default class Login extends Component {
    render() {
        return (
            <Container maxWidth="xs">
                <div style={style.paper}>
                    <Avatar style={style.avatar}>
                        <LockOutLineIcons/>
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Enter your user
                    </Typography>
                    <form style={style.form}>
                        <TextField variant='outlined' label='E-mail' name='email' fullWidth margin='normal'/>
                        <TextField variant='outlined' label='Password' name='password' type='pasword' fullWidth margin='normal'/>
                        <Button style={style.submit} type='submit' variant='contained' fullWidth color='primary'>LogIn</Button>
                    </form>
                </div>
            </Container>
        )
    }
}
