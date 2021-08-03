import './App.css';
import {connect} from "react-redux";
import {getPosts as getPostsActions, deletePost as deletePostActions} from "./redux/module/posts";
import Post from "./redux/components/post";
import 'antd/dist/antd.css';
import {useEffect} from "react";
import CreatePost from "./redux/components/CreatePost";

function App({posts, getPosts,deletePost}) {
    useEffect(() => {
        getPosts()
    }, [])
    // console.log(posts)

    return (
        <div>
            <CreatePost/>
            <div className="App">
                {posts.map(item =>
                    <Post
                        id={item.id}
                        deletePost={deletePost}
                        key={item.id}
                        title={item.title}
                        body={item.body}/>
                )}

            </div>
        </div>

    );
}

export default connect(
    ({posts}) => ({posts: posts.posts}),
    {
        getPosts: getPostsActions,
        deletePost:deletePostActions
    }
)(App);
