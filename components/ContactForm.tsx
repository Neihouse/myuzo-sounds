import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: { name: string; email: string; message: string }) => {
    try {
      // Replace with your API endpoint
      const response = await axios.post('/api/contact', values);
      if (response.status === 200) {
        message.success('Message sent successfully!');
        form.resetFields();
      } else {
        message.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      message.error('An error occurred. Please try again later.');
    }
  };

  return (
    <Form
      form={form}
      name="contact"
      onFinish={onFinish}
      className={styles.contactForm}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="message"
        rules={[{ required: true, message: 'Please input your message!' }]}
      >
        <Input.TextArea placeholder="Message" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Send Message
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
