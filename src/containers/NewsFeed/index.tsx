import * as React from 'react'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Container from 'src/components/Container';
import Post from '../../components/Post'
import { bindActionCreators } from 'redux';
import * as postsThunk from '../../ducks/Posts'

interface INewsFeedProps{
    fetchPosts:() => void
    fetched: boolean
    loading: boolean
    data: postsThunk.IData
}

class NewsFeed extends React.Component<INewsFeedProps> {

    constructor(props:INewsFeedProps) {
        super(props)
        const { fetchPosts, fetched } = props
        if(fetched){
            return
        }
        fetchPosts()
    }

    public render() {
        const { data } = this.props
        return (
            <Container>
                {Object.keys(data).map(x => {
                    const post = data[x]
                    return 
                    <div key={x} style={{ margin: '0 auto' }}>
                        <Post image={post.imageUrl} />
                    </div>
                })}
            </Container>
        )
    }
}

const mapStateToProps = (state: any) => {
    const {Post :{data, fetched, fetching} } = state
    const loading = fetching || fetched
    return{
        data,fetched,loading
    }
    
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) =>
    bindActionCreators(postsThunk, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)