import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`帮助中心-程序员远程自由工作平台${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >

    </Layout>
  );
}
