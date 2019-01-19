import React from 'react';
import Post from '../Post/Post';
import PostContent from '../PostContent/PostContent';
import PostLink from '../PostLink/PostLink';
import PostAction from '../PostAction/PostAction';
import './SocialCard.css';


const SocialCard = ({posts, userPosts, onLikeClick, onRetweetClick}) => {
    
        return (

        <div className='card'>
            {
                posts.map(post=>{
                    const userPost = userPosts.filter((userPost)=> {
                        return post.id === userPost.id;
                    })
                    return (
                    <div key={post.id}>
                        <Post 
                            username={post.username} 
                            date={post.date} 
                            fullName={post.fullName}
                            handle={post.handle}
                            postTitle={post.postTitle}
                            
                        />
                        <PostContent 
                            authorPhotoUrl={post.authorPhotoUrl} 
                            fullName={post.fullName}    
                            username={post.username}
                            postTitle={post.postTitle}
                        />
                        <PostLink 
                            websiteUrl={post.websiteUrl}
                            postTitle={post.postTitle}
                            postDescription={post.postDescription}
                            postUrl={post.postUrl}
                        />
                        <PostAction 
                            loveImage={userPost.length === 0 ?'' : userPost[0].loveImage} 
                            onLikeClick={()=>{onLikeClick(post)}}
                            onRetweetClick={()=>{onRetweetClick(post)}}
                            likes={post.totalLikes}

                            retweetImage={userPost.length === 0 ?'' : userPost[0].retweetImage} 
                            retweets={post.totalRetweets}
                            commentCount={post.totalComments}
                            
                        />
                    </div>
                )})
            }
            
        </div>
        );
}

export default SocialCard;