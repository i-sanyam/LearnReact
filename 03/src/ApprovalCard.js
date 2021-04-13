import React from 'react';

const ApprovalCard = props => {
  return (
    <div className="approvalCard">
      {props.children}
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  );
}

export default ApprovalCard;