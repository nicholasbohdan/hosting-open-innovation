import { Row, Col, Progress } from "reactstrap";
import Link from "next/link";

const LevelCard = () => (
  <Link href="/levelDetails">
    <a className="text-dark text-decoration-none">
      <div className="card border-radius-12">
        <div className="my-2 mx-3">
          <Row className="align-items-center">
            <Col lg="3" xs="2">
              <div
                className="bg-kalbe-orange-transparent15 border-radius-50 d-flex justify-content-center align-items-center"
                style={{
                  height: "2.5em",
                  width: "2.5em",
                }}
              >
                <img src="/images/crown-icon.png" height={24} />
              </div>
            </Col>
            <Col lg="9" xs="10">
              <p className="detail-text text-kalbe-darkGrey mb-0">Your level</p>
              <p className="body-copy text-kalbe-black font-weight-bold mb-0">
                LV.3 - The Innovator
              </p>
            </Col>
          </Row>
        </div>
        <hr className="m-0" />
        <div className="my-2 mx-3">
          <Row>
            <Col xs="4">
              <Progress
                value={100000}
                min={0}
                max={100000}
                barClassName="bg-kalbe-orange border-radius-10"
                style={{ height: "6px", marginTop: "10px" }}
              />
            </Col>
            <Col xs="auto">
              <p className="body-copy text-kalbe-darkGrey text-center mb-0">
                <span className="text-kalbe-orange font-weight-bold">
                  {`100,000`}
                </span>
                {`/${`100,000`}`}
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </a>
  </Link>
);

export default LevelCard;
