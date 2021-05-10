import BaseLayoutFull from "@/components/layouts/BaseLayoutFull";
import { Col, Progress, Row } from "reactstrap";

const CreateProgressBar = ({ value, min, max }) => (
  <Progress
    min={min}
    max={max}
    value={value}
    className="flex-fill progressBar-height"
    barClassName="bg-kalbe-orange border-radius-10"
  />
);

const CreateRankDetail = ({ end, rankName, rankValue }) => (
  <div className={`d-flex flex-column m-0 ${end && "justify-content-end"}`}>
    <p className="detail-text m-0 text-kalbe-darkGrey">{rankName}</p>
    <p className="body-copy m-0 text-kalbe-darkGrey">{`${rankValue} pts`}</p>
  </div>
);

const CreateDetailItem = ({ task, point }) => (
  <Col md="6" xs="12">
    <div className="border-bottom d-flex align-items-center pt-2 pb-1">
      <p className="body-copy mb-0">{task}</p>
      <div className="d-flex align-items-center ml-auto">
        <h3 className="heading3">{point}</h3>
        <p className="body-copy font-weight-normal ml-1 mb-2 align-items-end">
          pts
        </p>
      </div>
    </div>
  </Col>
);

const LevelDetails = () => {
  let currentValue = 15000;

  return (
    <BaseLayoutFull backOnly>
      <div
        className="w-100"
        style={{ height: "120px", backgroundColor: "#4C41D8", opacity: "0.1" }}
      ></div>
      <div className="container" style={{ marginTop: "-67.5px" }}>
        <div className="d-flex flex-column justify-content-center align-items-center mb-3">
          <img src="/badge-rank/7-innovator.png" height={128} />
          <h3 className="heading3 mb-0">{`LV.7 - The Innovator`}</h3>
          <h3 className="heading3 font-weight-normal">{`${`100,000`} pts`}</h3>
          <div className="w-100 mt-4 mb-5">
            <div className="d-flex">
              <CreateProgressBar value={currentValue} min={0} max={500} />
              <CreateProgressBar value={currentValue} min={500} max={1000} />
              <CreateProgressBar value={currentValue} min={1000} max={10000} />
              <CreateProgressBar value={currentValue} min={10000} max={30000} />
              <CreateProgressBar value={currentValue} min={30000} max={60000} />
              <CreateProgressBar
                value={currentValue}
                min={60000}
                max={100000}
              />
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ marginTop: "-13.75px" }}
            >
              <img src="/images/level-indicator.png" height={24} width={24} />
              <img src="/images/level-indicator.png" height={24} width={24} />
              <img src="/images/level-indicator.png" height={24} width={24} />
              <img src="/images/level-indicator.png" height={24} width={24} />
              <img src="/images/level-indicator.png" height={24} width={24} />
              <img src="/images/level-indicator.png" height={24} width={24} />
              <img src="/images/level-indicator.png" height={24} width={24} />
            </div>
            <div className="d-flex justify-content-between">
              <CreateRankDetail rankName="Rookie" rankValue={0} />
              <CreateRankDetail rankName="Thinker" rankValue={500} />
              <CreateRankDetail rankName="Experimenter" rankValue={1000} />
              <CreateRankDetail rankName="Developer" rankValue={10000} />
              <CreateRankDetail rankName="Creator" rankValue={30000} />
              <CreateRankDetail rankName="Pioneer" rankValue={60000} />
              <CreateRankDetail end rankName="Innovator" rankValue={100000} />
            </div>
          </div>
          <p className="body-copy text-kalbe-darkGrey">{`Congrats! You already reach the max level`}</p>
        </div>
        <hr className="m-0" />
        <div>
          <h3 className="heading3 text-kalbe-black font-weight-bold mt-4 mb-1">
            How to get point
          </h3>
          <p className="body-copy text-kalbe-darkGrey mb-1">
            You can increase your point everytime you doing this activities.
          </p>
          <Row>
            <CreateDetailItem task="View unique ideas" point={1} />
            <CreateDetailItem task="View unique ideas" point={1} />
            <CreateDetailItem task="Getting view from your ideas" point={2} />
            <CreateDetailItem task="Getting view from your ideas" point={2} />
            <CreateDetailItem task="Like an idea" point={3} />
            <CreateDetailItem task="Like an idea" point={3} />
            <CreateDetailItem task="Getting ideas post liked" point={5} />
            <CreateDetailItem task="Getting ideas post liked" point={5} />
            <CreateDetailItem task="Comment on others ideas" point={6} />
            <CreateDetailItem task="Comment on others ideas" point={6} />
            <CreateDetailItem task="Join a project" point={50} />
            <CreateDetailItem task="Join a project" point={50} />
          </Row>
        </div>
      </div>
    </BaseLayoutFull>
  );
};

export default LevelDetails;
