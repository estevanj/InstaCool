
import * as React from 'react'
import { Link } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import Button from './Button';
import Center from './Center';
import Input from './Input';


class LoginForm extends React.Component <InjectedFormProps> {
    public render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
           <Field label='Correo'  placeholder='Correo' name='email' type='email' component={Input} />
            <Field label='Password' placeholder='Password' name='password' type='password' component={Input} />
                <Button block={true}>Send</Button>
                <Center>
                    <Link to='/register'>Register</Link>
                </Center>
            </form>

        )
    }
}

export default reduxForm({
    form: 'login',
})(LoginForm)