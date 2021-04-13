import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker';

const App = () => {
  console.log(Faker.date.recent());
  return (
    <div className='ui comments containter'>
      <CommentDetail
        commentText={Faker.lorem.words()}
        author={Faker.name.firstName()}
        avatarSrc={Faker.image.avatar()}
        timeAgo={Faker.date.recent().toString()} />
      <CommentDetail
        commentText={Faker.lorem.words()}
        author={Faker.name.firstName()}
        avatarSrc={Faker.image.avatar()}
        timeAgo={Faker.date.recent().toString()} />
      <CommentDetail
        commentText={Faker.lorem.words()}
        author={Faker.name.firstName()}
        avatarSrc={Faker.image.avatar()}
        timeAgo={Faker.date.recent().toString()} />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));