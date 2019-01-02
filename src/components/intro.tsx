
import * as React from 'react';

interface IIntroProps {
 text ?: string
}

export default class Intro extends React.Component<IIntroProps>{

    public state ={
        texto: 'State'
    }

    public render(){
        const { text } = this.props
        const t = text ? text : this.state.texto
        return (
            <p  onClick = {this.handleClick} className="App-intro">
           <span>{t}</span>
          </p>
        )
    }
    
    private handleClick = () => {
        this.setState({ texto : 'cambio'})
    }
} 