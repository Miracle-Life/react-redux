import './App.css';
import {connect} from "react-redux";
import {getPosts as getPostsActions} from "./redux/module/posts";
import Post from "./redux/components/post";
import 'antd/dist/antd.css';
import {useEffect} from "react";

function App({posts, getPosts}) {
    useEffect(() => {
        getPosts()
    },[])
    console.log(posts)

    return (
        <div className="App">
            {posts.map(item =>
                <Post key={item.id} title={item.title} body={item.body}/>
            )}

        </div>
    );
}

export default connect(
    ({posts})=>({posts:posts.posts}),
    {
        getPosts: getPostsActions
    }
)(App);
