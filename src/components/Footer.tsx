import * as React from 'react'

import { faRetweet, faThumbsUp  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles ={
    button:{
        cursor: 'pointer',
        flex:1, 
        padding :'10px 15px', 
        textAlign:'center', 
    },
    footer:{
        backgroundColor:'#eee', 
        display:'flex', 
        marginBottom:'-10px', 
        marginLeft:'-15px', 
        width:'calc(100% + 30px)',
    }
} 

export default class Foother extends React.Component<any> {
    public render (){
        const {like, share} = this.props
        return (
            <div style= {styles.footer as React.CSSProperties}>
                <div  onClick={like} style = {styles.button as React.CSSProperties}><FontAwesomeIcon icon = {faThumbsUp}/>Like</div>
                <div onClick={share} style = {styles.button as React.CSSProperties}><FontAwesomeIcon icon={faRetweet}/>Shared</div>
            </div>
        )
    }
}