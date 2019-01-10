import * as React from 'react';

import Button from './Button';
import Input from './Input';

import { Link } from 'react-router-dom';
import { Field,InjectedFormProps, reduxForm } from 'redux-form'

const RegisterForm: React.FunctionComponent<InjectedFormProps> = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field placeholder='Correo' label='Correo' name='email' type='email' component={Input} />
            <Field placeholder='Contraseña' label='Contraseña' name='password' type='password' component={Input} />
            <Button> Registrarse </Button>
            <Link to='/'> Iniciar Sesión </Link>
        </form>
    );
}

export default reduxForm({
    form: 'login',
})(RegisterForm);