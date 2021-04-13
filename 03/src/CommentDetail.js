import React from 'react';
import Faker from 'faker';

const CommentDetail = () => {
  return (
    <div className='comment'>
      <a href="/" className="avatar">
        <img alt='avatar' src={Faker.image.avatar()}></img>
      </a>
      <div className='content'>
        <a href="/" className="author">Stephen</a>
        <div className='metadata'>
          <span className="date">Today at 6:30PM</span>
        </div>
        <div className="text">This is a comment</div>
      </div>
    </div>
  );
}

export default CommentDetail;