
import { Button, Form, Input, } from 'antd';
import { Link } from 'react-router-dom';

export const Forms = () => {
    return (
    <>
      <Form layout="vertical" autoComplete="off" >
        <Form.Item name="name" label="Name:">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email:">
          <Input/>
        </Form.Item>
        <Form.Item name="password" label="Password:">
          <Input/>
        </Form.Item>
      </Form>
      <Link to='/404:Not Found'>
      <Button type="primary">Join Now</Button> 
      </Link> 
    </>
  );
};

