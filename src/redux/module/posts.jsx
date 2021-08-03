
const moduleName = 'posts';

const GET_POST = `${moduleName}/GET_POSTS`;

const defaultState = {
    posts:[]
}

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case GET_POST:
            return {...state, posts: payload}
        default:
            return state
    }
}
export const getPosts = () => async (dispatch) => {
    try {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => dispatch({type: GET_POST, payload: data}))
    } catch (e) {
        console.log(e)
    }
}
