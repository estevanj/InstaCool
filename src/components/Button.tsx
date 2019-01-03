import * as React from 'react'

const style = (block: boolean) =>({
    backgroundColor: '#00D1B2',
    border: '0px',
    borderRadius: '4px',
    color:'#fff',
    marginBottom: '10px',
    padding: '10px 15px',
    width: block ? '100%': undefined
})

interface Ibutton {
    block ?: boolean
}

export default class Button extends React.Component <Ibutton>{
    public render (){
        const { block = false } = this.props
        return(
            <button {...this.props} style={style(block)}/>
        )
    }
}