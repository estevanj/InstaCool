import * as React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../components/Button';
import Card from '../../components/Card';
import Center from '../../components/Center';
import Container from '../../components/Container'
import Input from '../../components/input';
import Title from '../../components/Title';

export default class Login extends React.Component{
    public render() {
        return(
            <Container center={true}>
            <Card>
              <Title>Loggin</Title>
              <Input placeholder = 'Email' label='Email'/>
              <Input placeholder = 'Pass' label= 'Pass'/>
              <Button block ={true}>Send</Button>
              <Center>
              <Link to='/register'>Register</Link>
              </Center>
             
            </Card>
         </Container>
        )
    }
}