import React from 'react';
import './PostLink.css';

const PostLink = (props) => {
    const {postTitle, postDescription, websiteName, postUrl} = props;
    return (
        <div className='postlink'>
            <a href={postUrl} target='_blank'  rel="noopener noreferrer">
            <div className='content'>
                <div className='heading'>
                    <span>
                        <strong>{postTitle}</strong>
                    </span>
                </div>
                <div className='description'>
                    <span>{postDescription}</span>
                </div>
                <div className='source'>
                    <span>{websiteName}</span>
                </div>
            </div>
            </a>
        </div>
    )
}

export default PostLink;