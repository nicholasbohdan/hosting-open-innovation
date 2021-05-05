import { Row, Col, Modal, ModalBody, Button } from "reactstrap";
import { useState } from "react";

const AchievementItems = ({ data, isEarned }) => {
  const [modal, setModal] = useState({ data: null });
  
  const showData = (id) => setModal({ data: id });
  const resetData = () => setModal({ data: null });

  return (
    <Row className="match-height">
      {data &&
        data.map((data) => (
          <Col key={data.id} onClick={() => showData(data.id)} lg="2" xs="4">
            <div className="d-flex flex-column align-items-center">
              <img src={data.image} height={56} className="mb-1" />
              <p className="body-copy text-center mb-4">{data.title}</p>
            </div>
            <Modal
              centered
              isOpen={modal.data === data.id}
              toggle={resetData}
              className="mx-auto"
              contentClassName="border-radius-20"
              style={{
                width: "350px",
              }}
            >
              <ModalBody
                className="d-flex flex-column align-items-center"
                style={{ borderRadius: "20px" }}
              >
                <img src={data.image} height={96} className="mb-2 mt-4" />
                <p className="heading3 mb-2">{data.title}</p>
                <div
                  className="px-2 py-0 mb-3"
                  style={{ borderRadius: "4px", backgroundColor: "#F1F1F1" }}
                >
                  <p className="body-copy font-weight-bold m-0">{`+ ${data.points}`}</p>
                </div>
                <p className="detail-text text-muted text-justify mb-4">
                  {data.modalText}
                </p>
                {isEarned ? (
                  <></>
                ) : (
                  <>
                    <hr className="m-0 w-100 mb-3" />
                    <p className="body-copy font-weight-bold w-100 text-left mb-3">
                      How to get this?
                    </p>
                  </>
                )}
                <div
                  className="w-100 px-3 py-2 mb-4"
                  style={{ borderRadius: "6px", backgroundColor: "#F1F1F1" }}
                >
                  <p className="body-copy text-center m-0">
                    {isEarned
                      ? `You already earn this achievement on ${data.achievedDate}`
                      : `Join competition and become a 10 finalist of Konvensi Inovasi`}
                  </p>
                </div>
                <Button
                  onClick={resetData}
                  className="bg-kalbe-green border-radius-10 font-weight-bold w-100 mb-2"
                  style={{ height: "3em" }}
                >
                  {isEarned ? "Close" : "Okay, I understand"}
                </Button>
              </ModalBody>
            </Modal>
          </Col>
        ))}
    </Row>
  );
};

export default AchievementItems;
