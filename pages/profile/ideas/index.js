import BaseLayout from "@/components/layouts/BaseLayout";
import IdeasCard from "@/components/shared/IdeasCard";
import Header from "components/header";
import { Row } from "reactstrap";

const Ideas = () => {
  return (
      <>
        <BaseLayout currentPosition={"ideas"}>
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
      </>
  );
}

export default Ideas