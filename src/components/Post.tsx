import * as React from 'react'

import Foother from '../components/Footer';
import { IServices } from 'src/services';
import { Dispatch } from 'redux';

const style ={
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    marginBottom: '10px',
    padding: '10px 15px',
    width: '300px'
}

interface IpostProps {
    image : string
    like: () => void
    share: () => void
}

export default class Post extends React.Component<IpostProps>{
    public render (){
         const { image, like,share } = this.props
        return(
            <div style = { style }>
            <img style={{width: '300px'}} src={image} />
            <Foother like={like} shared ={share}/>
            </div>
        )
    }
}

