import {Form, Input, Button} from 'antd';
import {connect} from "react-redux";
import {createPost as createPostAction} from "../../module/posts";

const CreatePost = ({createPost}) => {
    const onSubmit = (value) => {
        createPost(value)
    }
    return (
        <Form
            name="basic"
            onFinish={onSubmit}
        >
            <Form.Item
                label="Title"
                name="title"
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Body"
                name="body"
            >
                <Input/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default connect(
    null,
    {
        createPost: createPostAction,
    }
)(CreatePost);
