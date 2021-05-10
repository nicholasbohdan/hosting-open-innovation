import { ArrowLeft } from "react-iconly";
import Router from "next/router";
import {
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Header from "components/Header";
import Footer from "components/Footer";

const BaseLayoutFull = (props) => {
  if(props.mode === 'SubHeaderMenu'){
    return (
      <div>
        <div className="container d-flex align-items-center">
                <h2>
                    Idea Catalog
                </h2>
            <FormGroup>
              <Input
                type="text"
                name="search"
                placeholder="Search"
                className="border-radius-10 height-48"
                id="search"
                // value="statik"
                onChange={() => {}}
              />
            </FormGroup>
            <Button className="mt-3 bg-kalbe-green border-radius-10 height-48">
              + Submit Your Idea
            </Button>
            {/* <div>
                <a href={'/idea_catalog/submit_idea'}> </a>
            </div> */}
        </div>
        <hr className="m-0" />
        <div className={props.withContainer && "container py-4"}>{props.children}</div>
      </div>
      
    );
  } else {
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
  }
};

export default BaseLayoutFull;
