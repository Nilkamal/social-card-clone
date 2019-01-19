import React from 'react';
import './Post.css';

const Post = (props) => {
    const {username, handle, fullName, date, postTitle} = props;
    return (
        <div className='left '>
            <div className='avatar'>
                <span>{username}</span>
            </div>
            <div className='header pl-10'>
                <div className='username'>
                    <strong>{fullName} <span className='userhandle'>{handle} - {date}</span></strong>
                </div>
                <div className='content'>
                    <span>
                        {postTitle}
                    </span>
                    <br/>
                    <span>
                        Author: {username}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post;