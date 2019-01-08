import * as React from 'react'

import Card from '../../components/Card';
import Container from '../../components/Container'
import Title from '../../components/Title';
import RegisterForm from '../../components/RegisterForm'

import { connect } from 'react-redux';
import { Ilogin, register as registerThunk } from '../../ducks/Users';
import { ThunkDispatch } from 'redux-thunk';

interface IRegisterProps{
    register: (a: Ilogin) => void
}

class Register extends React.Component<IRegisterProps>{
    public render() {

        const { register } = this.props
        return(
            <Container center={true}>
            <Card>
              <Title>Register</Title>
              <RegisterForm onSubmit ={register}/>
            </Card>
         </Container>
        )
    }
}

const mapStateToProps = (state:any) => state
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    register: (payload: any) => dispatch(registerThunk(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);