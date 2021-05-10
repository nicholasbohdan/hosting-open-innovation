import Image from "next/image";
import { Chat, Show } from "react-iconly";
import { Col, Input, Row } from "reactstrap";

const CreateCommentItem = ({ name, date, comment }) => (
  <div className="d-flex align-items-start mb-3">
    <div
      className="image-container mr-3"
      style={{ width: "2.5em", height: "2.5em" }}
    >
      <Image
        src="/images/profile-picture.jpg"
        layout="fill"
        className="image-inside border-radius-50 "
      />
    </div>
    <div className="w-100 bg-kalbe-lightGrey border-radius-8 p-3">
      <div className="d-flex">
        <p className="detail-text text-kalbe-darkGrey mb-0">{name}</p>
        <p className="detail-text text-kalbe-darkGrey mb-0 ml-auto">{date}</p>
      </div>
      <p className="body-copy text-kalbe-black mb-0">{comment}</p>
    </div>
  </div>
);

const LikeComment = () => (
  <div>
    <div className="d-flex align-items-center">
      <div className="d-flex">
        <div className="d-flex align-items-center mr-2">
          <img
            src="/images/like-icon.svg"
            width={14}
            className="text-kalbe-darkGrey mr-1"
          />
          <p className="tags-text text-kalbe-darkGrey m-0">{121}</p>
        </div>
        <div className="d-flex align-items-center">
          <Show set="light" size="small" className="text-kalbe-darkGrey mr-1" />
          <p className="tags-text text-kalbe-darkGrey m-0">{440}</p>
        </div>
      </div>
      <div className="ml-auto">
        <p className="tags-text text-kalbe-darkGrey m-0">{`${8} comments`}</p>
      </div>
    </div>
    <div className="border-top border-bottom py-2 my-3">
      <Row noGutter>
        <Col
          xs="6"
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src="/images/like-icon.svg"
            width={20}
            className="text-kalbe-black mr-1"
          />
          <p className="detail-text text-kalbe-black font-weight-bold m-0">
            Like
          </p>
        </Col>
        <Col
          xs="6"
          className="d-flex justify-content-center align-items-center"
        >
          <Chat set="light" width={20} className="text-kalbe-black mr-1" />
          <p className="detail-text text-kalbe-black font-weight-bold m-0">
            Comment
          </p>
        </Col>
      </Row>
    </div>
    <div>
      <p className="detail-text text-kalbe-black font-weight-bold">{`View ${6} more comments`}</p>
      <CreateCommentItem
        name="Imelda Pertiwi"
        date="01 Feb 2021"
        comment="Berdoa yang terbaik moga menang 🙏"
      />
      <CreateCommentItem
        name="Chintya Larasati"
        date="29 Jan 2021"
        comment="Aku ikut doain ya kak!"
      />
      <div className="d-flex align-items-start mb-4">
        <div
          className="image-container mr-3"
          style={{ width: "2.5em", height: "2.5em" }}
        >
          <Image
            src="/images/profile-picture.jpg"
            layout="fill"
            className="image-inside border-radius-50 "
          />
        </div>
        <Input
          type="text"
          name="name"
          className="border-radius-8 height-44"
          id="nameInput"
          placeholder="Write a comment..."
          onChange={() => {}}
        />
      </div>
    </div>
  </div>
);

export default LikeComment;
