import React from 'react';
import Link from 'next/link';
import { List } from 'antd';
import styles from '../styles/CategoryList.module.css';

type CategoryListProps = {
  categories: Array<{ name: string; slug: string }>;
};

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => (
  <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={categories}
    renderItem={(item) => (
      <List.Item>
        <Link href={`/categories/${item.slug}`} legacyBehavior>{item.name}</Link>
      </List.Item>
    )}
    className={styles.categoryList}
  />
);

export default CategoryList;
