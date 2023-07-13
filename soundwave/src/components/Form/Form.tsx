import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import './Form.css';

export const Forms = () => {
  return (
    <div className='forms-style'>
      <Form layout="vertical" autoComplete="off" className="form">
        <Form.Item name="name" label="Name:" className="form-item" >
          <Input className="form-input" />
        </Form.Item>
        <Form.Item name="email" label="Email:" className="form-item">
          <Input className="form-input" />
        </Form.Item>
        <Form.Item name="password" label="Password:" className="form-item">
          <Input className="form-input" />
        </Form.Item>
      </Form>
      <Link to="/404:Not Found" className="form-link">
        <Button type="primary" className="form-button">
          Join Now
        </Button>
      </Link>
    </div>
  );
};
