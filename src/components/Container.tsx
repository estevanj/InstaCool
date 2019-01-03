import * as React from 'react'

const style ={
    alignItems:'center',
    backgroundColor: '#eee',
    display: 'flex',
    height : 'calc(100vh - 20px)',
    justifyContent: 'center',
    padding: '10px 15px',
    width: 'calc(100vw - 30px)',
}

export default class Container extends React.Component{
    public render (){
        const { children } = this.props
        return(
            <div style = { style }>
            {children}
            </div>
        )
    }
}