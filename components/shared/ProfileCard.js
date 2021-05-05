import {
  Row,
  Col
} from "reactstrap";
import LevelCard from "./LevelCard";
import ProfileNavTab from "./ProfileNavTab";
import Link from "next/link";

const ProfileCard = ({ width, currentPosition }) => {
  return (
    <div
      className={`${width >= 576 ? "card border-radius-12" : "shadow"}`}
    >
      <div
        className="w-100 bg-profile-gradient"
        style={{
          position: "relative",
          paddingTop: "35%",
          borderRadius: `${width >= 576 ? "12px 12px 0 0" : "0"}`,
        }}
      ></div>
      <div className="card-body p-3">
        <Row noGutters>
          <Col xs="auto">
            <img
              className="img-thumbnail float-left"
              src="/images/profile-picture.jpg"
              style={{
                objectFit: "cover",
                width: "86px",
                height: "86px",
                marginTop: "-64px",
                borderRadius: "50%",
                borderColor: "transparent"
              }}
            />
          </Col>
          <Col>
            <Link href="/editProfile">
              <a className="btn btn-outline-secondary border-radius-10 float-right bg-kalbe-white text-kalbe-black font-weight-bold">
                Edit Profile
              </a>
            </Link>
          </Col>
        </Row>
        <h5 className="heading3 text-kalbe-black mb-0">Arya Mukti</h5>
        <h6 className="body-copy text-kalbe-darkGrey mb-0">
          Corporate Business Development
        </h6>
        <h6 className="body-copy text-kalbe-darkGrey mb-3">
          arya.mukti@kalbe.co.id
        </h6>
        <LevelCard />
      </div>
      {width >= 576 ? (
        <></>
      ) : (
        <ProfileNavTab currentPosition={currentPosition} />
      )}
    </div>
  );
};

export default ProfileCard;
