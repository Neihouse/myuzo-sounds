import React from 'react';
import { Button, Carousel, Card } from 'antd';
import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Carousel autoplay>
        <div>
          <h3 className={styles.contentStyle}>Item 1</h3>
        </div>
        <div>
          <h3 className={styles.contentStyle}>Item 2</h3>
        </div>
        <div>
          <h3 className={styles.contentStyle}>Item 3</h3>
        </div>
        <div>
          <h3 className={styles.contentStyle}>Item 4</h3>
        </div>
      </Carousel>

      <div className={styles.cardContainer}>
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>

      <Button type="primary">Primary Button</Button>
    </div>
  );
}
