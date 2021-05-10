import ProfileCard from "@/components/shared/ProfileCard";
import ProfileNavCard from "@/components/shared/ProfileNavCard";
import { Col, Row } from "reactstrap";
import ReactResizeDetector from "react-resize-detector";
import Header from "components/Header";
import Footer from "components/Footer";

const BaseLayout = (props) => {
  return (
    <ReactResizeDetector handleWidth>
      {({ width }) => (
        <>
          <Header />
          <div className={`container ${width >= 576 && "mt-4"}`}>
            <Row className="align-items-start">
              <Col
                xl="3"
                lg="4"
                md="6"
                xs="12"
                className={`m-0 ${width < 576 && "px-0"}`}
              >
                <ProfileCard
                  width={width}
                  currentPosition={props.currentPosition}
                />
                {width >= 576 ? <br /> : <></>}
                {width >= 576 ? (
                  <ProfileNavCard currentPosition={props.currentPosition} />
                ) : (
                  <></>
                )}
              </Col>
              <Col
                xl="9"
                lg="8"
                md="6"
                xs="12"
                className={`${(props.border && width >= 576) && "border"}`}
                style={{ borderRadius: `${width >= 576 && "12px"}` }}
              >
                <div className={`${props.border && "container-fluid"} ${(props.border && width >= 576) && "my-4"} ${width < 576 && "mt-4"}`}>{props.children}</div>
              </Col>
            </Row>
          </div>
          <Footer />
        </>
      )}
    </ReactResizeDetector>
  );
};

export default BaseLayout;
