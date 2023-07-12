import React from 'react';
import { Button, Form, Input, } from 'antd';
import { Link } from 'react-router-dom';

const Forms: React.FC = () => {
  const [form] = Form.useForm<{ name: string; email:string; password:string }>();
 
  return (
    <>
      <Form form={form} layout="vertical" autoComplete="off">
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

export default Forms;