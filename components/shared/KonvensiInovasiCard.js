import Link from "next/link";
import { useState } from "react";
import {
  Row,
  Col,
  Badge,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import Image from "next/image"

const KonvensiInovasiCard = ({ currentState }) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!dropdownOpen);

  return (
    <Col xl="4" lg="6" md="12">
      <div className="card mb-4 border-radius-12">
        <div className="w-100 image-container image-ratio-konvensiCard">
          <img
            src="https://images.unsplash.com/photo-1619446851981-064779c84cc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
            className="w-100 h-100 image-inside border-radius-top-12"
          />
          {currentState !== "Finished" ? (
            <Badge
              className="bg-kalbe-status text-kalbe-black border-radius-8 m-0 px-3 py-2 tags-text d-flex justify-content-center align-items-center"
              style={{
                position: "absolute",
                top: "0.75em",
                right: "0.75em",
              }}
            >
              Process...
            </Badge>
          ) : (
            <ButtonDropdown
              direction="left"
              isOpen={dropdownOpen}
              toggle={toggleDropdown}
              className=""
              style={{
                position: "absolute",
                top: "0.75em",
                right: "0.75em",
                height: "2.5em",
                width: "2.5em",
              }}
            >
              <DropdownToggle className="bg-kalbe-white border-kalbe-white border-radius-50 m-0 p-0 d-flex justify-content-center align-items-center">
                <Image src="/images/more-icon.png" width={20} height={20} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action 1</DropdownItem>
                <DropdownItem>Action 2</DropdownItem>
                <DropdownItem>Action 3</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          )}
        </div>
        <div className="p-3">
          <p className="body-copy text-kalbe-black font-weight-bold text-truncate mb-1">
            Kalbe Chatbot untuk mempercepat response time
          </p>
          <p className="detail-text text-kalbe-black text-truncate-2 mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            facilisis purus a lacus suscipit, ut tempor ex molestie.
          </p>
        </div>
        <hr className="m-0" />
        <div className="px-3 py-2">
          <Row>
            <Col xs="6" className="border-right pr-0">
              <p className="detail-text text-kalbe-darkGrey mb-0">Theme</p>
              <p className="detail-text text-kalbe-black mb-0">
                Revenue Growth
              </p>
            </Col>
            <Col xs="6">
              <p className="detail-text text-kalbe-darkGrey mb-0">
                Project Leader
              </p>
              <p className="detail-text text-kalbe-black mb-0">Arya Mukti</p>
            </Col>
          </Row>
        </div>
        <hr className="m-0" />
        <div className="px-3 py-2">
          <Row noGutters>
            <Col xs="auto" className="mr-2">
              <p className="border tags-text text-center border-radius-8 mb-0 p-2">
                Product/Service
              </p>
            </Col>
            <Col xs="auto">
              <p className="border tags-text text-center border-radius-8 mb-0 p-2">
                Chat Bot
              </p>
            </Col>
          </Row>
        </div>
        <hr className="m-0" />
        <div className="px-3 py-2">
          <Link href="#">
            <a className="text-kalbe-black">
              <Row noGutters className="align-items-center">
                <Col xs="1">
                  <img src="images/link-icon.png" height={12} className="m-0" />
                </Col>
                <Col xs="11">
                  <p className="detail-text text-truncate mb-0">
                    Kalbe Chatbot sebagai alat bantu customer
                  </p>
                </Col>
              </Row>
            </a>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default KonvensiInovasiCard;
