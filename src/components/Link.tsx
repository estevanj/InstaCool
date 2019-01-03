import * as React from 'react'

const style ={
   color: 'blue',
   fontSize: '11px',
   padding: '15px'
}

export default class Link extends React.Component{
    public render (){
        return(
        <a {...this.props} style= {style} />
        )
    }
}