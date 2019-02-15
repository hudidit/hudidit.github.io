import * as React from 'react';
import Head from 'next/head'
import App from '../src/App';
import { getIssues } from '../src/api';

interface Props {
  posts: any[]
}

export default class IndexPage extends React.Component<Props> {
  static fetchPosts() {
    return getIssues().then(data => {
      return {
        posts: data
      };
    });
  }
  static async getInitialProps() {
    const { posts } = await this.fetchPosts();
    return { posts };
  }
  render() {
    const { posts } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>哈哈胡子的博客</title>
        </Head>
        <div id="root" className="markdown-body">
          <App posts={posts} />
        </div>
      </React.Fragment>
    )
  }
}