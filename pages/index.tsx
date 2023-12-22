import React from 'react';
<<<<<<< HEAD
import { Button, Carousel, Card } from 'antd';
import 'antd/dist/antd.css';
=======
import Head from 'next/head';
import { Carousel, Card } from 'antd';
>>>>>>> 672a1f4b (Committing changes)
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
=======
      <Head>
        <title>Myuzo Sounds - Home</title>
        <meta name="description" content="Discover high-quality music samples at Myuzo Sounds. Explore our collection and find the perfect sound for your music production." />
      </Head>
>>>>>>> 672a1f4b (Committing changes)
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
<<<<<<< HEAD
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
=======
        <Card title="Featured Sample" bordered={false} style={{ width: 300 }}>
          <p>Explore this week's featured music sample. Curated for quality and creativity.</p>
        </Card>
        <Card title="New Arrivals" bordered={false} style={{ width: 300 }}>
          <p>Check out the latest additions to our collection. Fresh sounds for your projects.</p>
        </Card>
        <Card title="Top Sellers" bordered={false} style={{ width: 300 }}>
          <p>Discover the most popular samples that producers are loving right now.</p>
        </Card>
      </div>
>>>>>>> 672a1f4b (Committing changes)
    </div>
  );
}
