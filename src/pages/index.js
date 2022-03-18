import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Typed from 'typed.js';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const el = React.useRef(null);
  const typed = React.useRef(null);
  React.useEffect(() => {
    const options = {
      strings: [
        '项目整包、一站式软件开发',
        '云端开发、自由工作、远程工作',
        '需求梳理、规划落地你的想法',
        '客栈学院、开发者技能训练营',
        '资源下载、开发的物料市场',
      ],
      typeSpeed: 70,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <Layout
      title={`帮助中心-程序员远程自由工作平台${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <section className={styles.banner}>
        <div className={styles.cover}></div>
        <div className={styles.content}>
          <p className={styles.title}>「程序员客栈」</p>
          <p className={styles.desc}>领先的开发者自由工作平台</p>
          <div className={styles.type_wrap}>
            <span style={{ whiteSpace: 'pre' }} ref={el} />
          </div>
          <div className={styles.btns}>
            <Link to="/docs/category/解决方案" className="Link"><button className={styles.btns_cus}>需求方文档</button></Link>
            <Link to="/docs/我是开发者/常见问题" className="Link"><button className={styles.btns_dev}>开发者文档</button></Link>
          </div>
        </div>
      </section>
      {/* <section className={styles.body}>
      </section> */}
    </Layout>
  );
}
