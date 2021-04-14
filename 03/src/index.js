import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker';
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className='ui comments containter'>
      <ApprovalCard>
        <CommentDetail
          commentText={Faker.lorem.words()}
          author={Faker.name.firstName()}
          avatarSrc={Faker.image.avatar()}
          timeAgo={Faker.date.recent().toString()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          commentText={Faker.lorem.words()}
          author={Faker.name.firstName()}
          avatarSrc={Faker.image.avatar()}
          timeAgo={Faker.date.recent().toString()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          commentText={Faker.lorem.words()}
          author={Faker.name.firstName()}
          avatarSrc={Faker.image.avatar()}
          timeAgo={Faker.date.recent().toString()} />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));