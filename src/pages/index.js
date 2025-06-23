import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
 // 自定义搜索组件
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - 技术文档`}
      description="专业的开发文档、API参考和教程">
      
      {/* 1. 顶部英雄区域 */}
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          
        {/* 主要行动按钮 */}
          {/* <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              快速开始 →
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/tutorials">
              查看教程
            </Link>
          </div> */}
        </div>
      </header>

      {/* 2. 核心功能展示 */}
      <main>
        <HomepageFeatures />
        
        {/* 3. 文档分类区块 */}
        <section className={styles.section}>
          <div className="container">
            <h2>文档分类</h2>
            <div className={styles.docCategories}>
              <Link to="/docs/区块链/api" className={styles.docCard}>
                <h3>API 参考</h3>
                <p>完整的接口文档和示例代码</p>
              </Link>
              <Link to="/docs/使用指南/guides" className={styles.docCard}>
                <h3>开发指南</h3>
                <p>从入门到进阶的详细教程</p>
              </Link>
              <Link to="/docs/常见问题/questions" className={styles.docCard}>
                <h3>常见问题</h3>
                <p>高频问题的解决方案</p>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. 最新博客展示 (可选) */}
        <section className={styles.sectionAlt}>
          <div className="container">
            <h2>最新动态</h2>
            <div className={styles.blogPosts}>
              {/* 这里可以通过API动态获取最新博客 */}
              <Link to="/examples/release-1.0" className={styles.blogCard}>
                <h3>v1.0 版本发布</h3>
                <p>2023-06-15</p>
                <p>新特性：支持多语言文档...</p>
              </Link>
            </div>
            <Link to="/examples" className="button button--secondary">
              查看所有博客
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}