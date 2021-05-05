import BaseLayout from "@/components/layouts/BaseLayout";
import KonvensiInovasiCard from "@/components/shared/KonvensiInovasiCard";
import { Row } from "reactstrap";

const KonvensiInovasi = () => {
  return (
    <BaseLayout currentPosition={"konvensiInovasi"}>
      <Row>
          <KonvensiInovasiCard currentState="Finished" />
          <KonvensiInovasiCard currentState="BU verifying process" />
          <KonvensiInovasiCard currentState="Judge Phase 1" />
          <KonvensiInovasiCard currentState="Judge Phase 2" />
      </Row>
    </BaseLayout>
  );
};

export default KonvensiInovasi;
