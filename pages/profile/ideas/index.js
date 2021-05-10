import BaseLayout from "@/components/layouts/BaseLayout";
import IdeasCard from "@/components/shared/IdeasCard";
import Link from "next/link";
import { Row } from "reactstrap";

const Ideas = () => {
  return (
      <BaseLayout currentPosition={"ideas"}>
        <div className="border border-radius-12 p-2 d-flex align-items-center mb-4">
          <h2 className="heading2 text-kalbe-black my-0 ml-2">
            My Ideas
          </h2>
          <div className="ml-auto">
            <Link href="#">
              <a className="btn bg-kalbe-green text-kalbe-white font-weight-bold border-radius-10 height-48 d-flex align-items-center">
                Submit New Idea
              </a>
            </Link>
          </div>
        </div>
        <Row>
          <IdeasCard currentState="Finished" />
          <IdeasCard currentState="BU verifying process" />
          <IdeasCard currentState="Judge Phase 1" />
          <IdeasCard currentState="Judge Phase 2" />
          <IdeasCard currentState="Finished" />
          <IdeasCard currentState="BU verifying process" />
          <IdeasCard currentState="Judge Phase 1" />
          <IdeasCard currentState="Judge Phase 2" />
          <IdeasCard currentState="Judge Phase 2" />
        </Row>
      </BaseLayout>
  );
};

export default Ideas;