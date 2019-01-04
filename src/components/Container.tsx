import * as React from 'react'

const style = (center: boolean): React.CSSProperties => ({
    alignItems: center? 'center': undefined,
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'column',
    height : 'calc(100vh - 20px)',
    justifyContent: center? 'center': undefined,
    padding: '10px 15px',
    width: 'calc(100vw - 30px)',
})

interface IContainer {
    center ?: boolean
}

export default class Container extends React.Component<IContainer>{
    public render (){
        const { children, center=false } = this.props
        return(
            <div style = { style(center) }>
            {children}
            </div>
        )
    }
}