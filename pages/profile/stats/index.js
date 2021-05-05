import BaseLayout from "@/components/layouts/BaseLayout";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Show, Chat } from "react-iconly";

const CreateStatItem = ({ icon, bgColor, value, desc }) => (
  <Col lg="5" xs="6" className="mb-4">
    <Card className="border-radius-12">
      <CardBody className="py-4">
        <div
          className={`bg-kalbe-${bgColor}-transparent border-radius-50 d-flex justify-content-center align-items-center mb-4`}
          style={{ height: "2.25em", width: "2.25em" }}
        >
          {icon}
        </div>
        <h3 className="heading2 mb-0">{value}</h3>
        <p className="body-copy text-kalbe-darkGrey m-0">{desc}</p>
      </CardBody>
    </Card>
  </Col>
);

const Stats = () => {
  return (
    <BaseLayout border currentPosition={"stats"}>
      <h2 className="heading2 mb-4">Your Stats</h2>
      <Row>
        <CreateStatItem
          bgColor="blue"
          value={`1,123`}
          desc="Likes other authors"
        />
        <CreateStatItem
          value={472}
          bgColor="fuchsia"
          desc="Likes from other authors"
        />
        <CreateStatItem
          icon={
            <Chat set="light" size="medium" className="text-kalbe-orange" />
          }
          bgColor="orange"
          value={955}
          desc="Comment your ideas"
        />
        <CreateStatItem
          icon={<Show set="light" size="medium" className="text-kalbe-green" />}
          bgColor="green"
          value={`8,291`}
          desc="User views your ideas"
        />
      </Row>
    </BaseLayout>
  );
};

export default Stats;
