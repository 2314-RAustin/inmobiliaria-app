import React, { Component } from 'react';
import { Container, Avatar, Typography, TextField, Button } from '@material-ui/core';
import LockOutLineIcons from '@material-ui/icons/LockOutlined';
import { compose } from "recompose";
import { consumerFirebase } from '../../server';

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

class Login extends Component {

    state = {
        firebase : null,
        user : {
            email : '',
            password : ''
        }
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if(nextProps.firebase === prevState.firebase){
            return null
        }

        return {
            firebase : nextProps.firebase
        }        
    }

    handleChange = (e) => {
        let user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({user})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { firebase, user } = this.state;


        firebase.auth
        .signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            console.log(`La respuesta de la autenticacion fue: ${res}`)
            this.props.history.push('/');
        })
        .catch(error => {
            console.log(`Hubo un error al intentarse logear: ${error}`)
        })     
    }

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
                        <TextField onChange={this.handleChange} value={this.state.user.email} variant='outlined' label='E-mail' name='email' fullWidth margin='normal'/>
                        <TextField onChange={this.handleChange} value={this.state.user.password} variant='outlined' label='Password' name='password' type='password' fullWidth margin='normal'/>
                        <Button onClick={this.handleSubmit} style={style.submit} type='submit' variant='contained' fullWidth color='primary'>LogIn</Button>
                    </form>
                </div>
            </Container>
        )
    }
}

export default compose(consumerFirebase)(Login);