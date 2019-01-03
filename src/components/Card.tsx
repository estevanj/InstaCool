import * as React from 'react'

const style ={
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px 15px',
}

export default class Card extends React.Component{
    public render (){
        const { children } = this.props
        return(
            <div style = { style }>
            {children}
            </div>
        )
    }
}