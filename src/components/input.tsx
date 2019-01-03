import * as React from 'react'

const style ={
    backgroundColor: '#fff',
    border: '1px solif #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
    padding: '10px 15px',   
    width : 'calc(100% - 30px)',
}
const spanStyle ={
    color: '#777',
    fontSize: '10px',
    fontWeight: 900,
    textTransform: 'uppercase',
} as React.CSSProperties

interface IInputProps{
    placeholder ?: string
    label : string
}

export default class Input extends React.Component<IInputProps> {
    public render (){
        const { label } = this.props;
        return(
            <div>
                <span style={spanStyle}>{label}</span>
                <input {...this.props} style ={style}/>
            </div>
            
        )
    }
}