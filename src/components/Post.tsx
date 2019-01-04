import * as React from 'react'

import Foother from '../components/Footer';

const style ={
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    marginBottom: '10px',
    padding: '10px 15px',
}

interface IpostProps {
    image : string
}

export default class Post extends React.Component<IpostProps>{
    public render (){
         const { image } = this.props
        return(
            <div style = { style }>
            <img src={image} />
            <Foother/>
            </div>
        )
    }
}