import React from 'react';
import './PostContent.css';

const PostContent = (props) => {
    const {postTitle, username, fullName, authorPhotoUrl} = props;
    return (<div className='postcontent'>
        <div className='avatar'>
            <span>{username}</span>
        </div>
        <div className='title left'>
            <span>{postTitle}</span>
        </div>

        <div className='user-info'>
            <div className='name'>
                <span style={{color:'white', fontSize:'18px', fontWeight:'700'}}>
                    {fullName}
                </span>
            </div>
            <div className='photo'>
                <img src={authorPhotoUrl} alt='' height='50' width='50'/>
            </div>
        </div>
    </div>);
}

export default PostContent;