import BaseLayoutFull from "components/layouts/BaseLayoutFull";
import ProfileForm from "components/shared/ProfileForm";
import { Row, Col } from "reactstrap";

const EditProfile = () => {
  return (
    <BaseLayoutFull backOnly withContainer>
      <h1 className="heading1">Edit Profile</h1>
      <Row>
        <Col lg="6" md="8" xs="12">
          <ProfileForm />
        </Col>
      </Row>
    </BaseLayoutFull>
  );
};

export default EditProfile;
