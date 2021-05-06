import { Row, Col } from "reactstrap";
import { Show, Chat } from "react-iconly";
import Image from "next/image";

const CreateCategoryTag = ({ tagName }) => (
  <Col xs="auto" className="mr-2 mb-2">
    <p className="border tags-text text-center border-radius-8 m-0 p-2">
      {tagName}
    </p>
  </Col>
);

const IdeasCatalogCard = ({ currentState }) => {
  return (
    <Col xl="3" lg="4" md="12">
      <div className="card mb-4 border-radius-12">
        <div
          className="card-header py-2 px-3"
          style={{ backgroundColor: "#FFFFFF", borderRadius: "12px 12px 0 0" }}
        >
          <div className="d-flex align-items-center">
            <img
              src="/images/profile-picture.jpg"
              className="mr-2 mb-0 border-radius-50"
              style={{
                objectFit: "cover",
                height: "2em",
                width: "2em",
              }}
            />
            <div className="d-flex flex-column">
              <p className="detail-text text-kalbe-black font-weight-bold m-0">
                Arya Mukti
              </p>
              <p className="tags-text text-kalbe-darkGrey m-0 text-left">
                2 Feb 2021
              </p>
            </div>
          </div>
        </div>
        <div className="w-100 image-container image-ratio-ideasCard">
          <Image
            src="https://images.unsplash.com/photo-1619446851981-064779c84cc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
            layout="fill"
            className="image-inside"
          />
        </div>
        <div className="p-3">
          <p className="body-copy text-kalbe-black font-weight-bold text-truncate mb-1">
            {`Kalbe Chatbot`}
          </p>
          <p className="detail-text text-kalbe-black text-truncate-2 mb-2">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            facilisis purus a lacus suscipit, ut tempor ex molestie.`}
          </p>
          <Row noGutters>
            <Col xs="3" className="d-flex align-items-center">
              <Show
                set="light"
                size="small"
                className="text-kalbe-darkGrey mr-1"
              />
              <p className="detail-text text-muted m-0">{212}</p>
            </Col>
            <Col xs="3" className="d-flex align-items-center">
              <div
                className="mr-1 mb-0"
                style={{
                  backgroundColor: "#C4C4C4",
                  height: "0.75em",
                  width: "0.75em",
                  borderRadius: "50%",
                }}
              ></div>
              <p className="detail-text text-muted m-0">{47}</p>
            </Col>
            <Col xs="3" className="d-flex align-items-center">
              <Chat
                set="light"
                size="small"
                className="text-kalbe-darkGrey mr-1"
              />
              <p className="detail-text text-muted m-0">{122}</p>
            </Col>
          </Row>
        </div>
        <hr className="m-0" />
        <div className="px-3 pt-2">
          <Row noGutters>
            <CreateCategoryTag tagName="Product/Service" />
            <CreateCategoryTag tagName="Chat Bot" />
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default IdeasCatalogCard;
