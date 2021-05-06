import { ArrowLeft } from "react-iconly";
import Router from "next/router";
import Footer from "components/Footer";
import Header from "components/header";

const BaseLayoutFull = (props) => {
  return (
    <>
      <Header />
      <div>
        <div className="container d-flex align-items-center">
          <a
            href="#"
            className="app-header text-kalbe-black d-flex align-items-center text-decoration-none py-3"
            onClick={() => Router.back()}
          >
            <ArrowLeft
              set="light"
              className="text-kalbe-black mr-2"
            />
            Back
          </a>
        </div>
        <hr className="m-0" />
        <div className={props.withContainer && "container py-4"}>
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BaseLayoutFull;
