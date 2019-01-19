import React from 'react';
import '../PostAction/PostAction.css';
import comment from '../../images/comment.png';
import mail from '../../images/mail.png';


const PostAction = ( props ) => {
    const {
        onLikeClick, 
        loveImage, 
        likes, 
        onRetweetClick, 
        retweets,
        retweetImage,
        commentCount
        } = props;
    return (
        <div className='postAction space-between'>
            <div className='comment left'>
                <div>
                    <img src={comment} alt='' height='40'/>
                </div>
                <div className='count'>{commentCount}</div>
            </div>
            <div className='retweet left' onClick={onRetweetClick}>
                <div>
                    <img src={retweetImage} alt='' height='40'/>
                </div>
                <div className='count' style={{marginLeft: '8px'}}>{retweets}</div>
            </div>
            <div className='love left' onClick={onLikeClick}>
                <div>
                    <img src={loveImage} alt='' height='40'/>
                </div>
                <div className='count' style={{color: 'red'}} >{likes}</div>

            </div>
            <div className='mail'>
                <div>
                    <img src={mail} alt='' height='40'/>
                </div>
                
            </div>
        </div>
    )
}

export default PostAction;