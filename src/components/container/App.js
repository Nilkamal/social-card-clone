import React, { Component } from 'react';
import SocialCard from '../SocialCard/SocialCard'
import postData from '../../api/postdata';
import whitelove from '../../images/whitelove.png'
import love from '../../images/love.png';
import retweetdone from '../../images/retweetdone.png';
import retweet from '../../images/retweet.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: postData,
      userPosts: []
    }
  }

  componentDidMount() {
    const {posts} = this.state;
    const userPosts = posts.map(post => {
      return {
          id: post.id, 
          isLiked: false, 
          isRetweeted: false, 
          loveImage: whitelove, 
          retweetImage: retweet
        }
    })
    
    this.setState({userPosts});
  }
  
  onLikeClick = (post) => {
    const userPostData = this.state.userPosts.filter((userPost) => {
      return userPost.id === post.id;
    })[0]
    userPostData.loveImage = userPostData.isLiked ? whitelove : love;
    post.totalLikes = userPostData.isLiked ? post.totalLikes - 1 : post.totalLikes + 1;
    userPostData.isLiked = !userPostData.isLiked;
    this.setState({userPosts:this.state.userPosts,...userPostData});
    this.setState({posts: this.state.posts, ...post});
}

onRetweetClick = (post) => {
    const userPostData = this.state.userPosts.filter((userPost) => {
      return userPost.id === post.id;
    })[0]
    userPostData.retweetImage = userPostData.isRetweeted ? retweet : retweetdone;
    post.totalRetweets = userPostData.isRetweeted ? post.totalRetweets - 1 : post.totalRetweets + 1;
    userPostData.isRetweeted = !userPostData.isRetweeted;
    this.setState({userPosts:this.state.userPosts,...userPostData});
    this.setState({posts: this.state.posts, ...post});
}

  render() {
    return (
      <div className="App center column">
        <h1 className='center'>Top 5 Posts From DEV.TO</h1>
        <SocialCard 
            posts={this.state.posts} 
            userPosts={this.state.userPosts}
            onLikeClick={this.onLikeClick} 
            onRetweetClick={this.onRetweetClick}
        />
      </div>
    );
  }
}

export default App;
