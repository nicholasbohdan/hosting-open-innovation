import BaseLayout from "@/components/layouts/BaseLayout";
import KonvensiInovasiCard from "@/components/shared/KonvensiInovasiCard";
import Link from "next/link";
import { Row } from "reactstrap";

const KonvensiInovasi = () => {
  return (
    <BaseLayout currentPosition={"konvensiInovasi"}>
      <div className="border border-radius-12 p-2 d-flex align-items-center mb-4">
        <h2 className="heading2 text-kalbe-black my-0 ml-2">My Konvensi Inovasi</h2>
        <div className="ml-auto">
          <Link href="#">
            <a className="btn bg-kalbe-green text-kalbe-white font-weight-bold border-radius-10 height-48 d-flex align-items-center">Submit New Project</a>
          </Link>
        </div>
      </div>
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
