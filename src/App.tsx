import React, { Component } from 'react';
import './markdown.css';
import './index.css';
import './App.css';
import { getIssues } from './api';

interface Props {
  posts: any[]
}

class App extends Component<Props> {
  state = {
    posts: []
  }
  
  componentDidMount() {
    getIssues().then(data => {
      this.setState({
        posts: data
      });
    });
  }
  render() {
    let posts: any[] = [];
    if (this.state.posts.length) {
      posts = this.state.posts || [];
    } else {
      posts = this.props.posts || [];
    }
    return (
      <div className="App">
        {posts.map((p: any) => {
          return <article className="post" key={p.id}>
            <h1 className="post-title">{p.title}</h1>
            <div className="post-create-time">🖌{new Date(p.created_at).toLocaleDateString()}</div>
            <div className="post-content" dangerouslySetInnerHTML={{__html: p.body_html}}></div>
            <div className="post-comment">
              <a href={p.html_url} target="_blank">
                <img src="/static/github.png" />
                在 Github 上查看和发表评论
              </a>
            </div>
          </article>;
        })}
      </div>
    );
  }
}

export default App;
