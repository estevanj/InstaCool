import * as React from 'react';
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';
import { InjectedFormProps, reduxForm, Field } from 'redux-form'

const RegisterForm: React.FunctionComponent<InjectedFormProps> = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field placeholder='Nombre' label='Nombre' name='name' component={Input} required />
            <Field placeholder='Apellido' label='Apellido' name='lastName' component={Input} required/>
            <Field placeholder='Nombre de usuario' label='@' name='userName' component={Input} required/>
            <Field placeholder='Correo' label='Correo' name='email' type='email' component={Input} required/>
            <Field placeholder='Contraseña' label='Contraseña' name='password' type='password' component={Input} required/>
            <Button> Registrarse </Button>
            <Link to='/' className={'card-link align-middle ml-2'}> Iniciar Sesión </Link>
        </form>
    );
}

export default reduxForm({
    form: 'login',
})(RegisterForm);