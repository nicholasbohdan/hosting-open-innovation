import BaseLayout from "@/components/layouts/BaseLayout";
import axios from "axios";
import AchievementItems from "components/shared/AchievementItems";
import { useState, useEffect } from "react";
import { Badge } from "reactstrap";

const Achievements = () => {
  const [earnedData, setEarned] = useState(null);
  const [lockedData, setLocked] = useState(null);

  useEffect(() => {
    axios.get("/api/v1/achievements/earned").then((res) => setEarned(res.data));
    axios.get("/api/v1/achievements/locked").then((res) => setLocked(res.data));
  }, []);

  return (
    <BaseLayout border currentPosition={"achievements"}>
      <h2 className="heading2 mb-4">Achievements</h2>
      <div className="mb-2">
        <div className="d-flex align-items-center mb-3">
          <h3 className="heading3 font-weight-bold mr-2 mb-0">Earned</h3>
          <Badge
            pill
            className="body-copy m-0 bg-kalbe-darkGrey text-kalbe-black d-flex justify-content-center align-items-center"
            style={{
              width: "1.75em",
              height: "1.75em",
              backgroundColor: "#EFEFEF",
            }}
          >
            {earnedData && earnedData.length}
          </Badge>
        </div>
        <AchievementItems data={earnedData} isEarned={true} />
      </div>
      <div>
        <div className="d-flex align-items-center mb-3">
          <h3 className="heading3 font-weight-bold mr-2 mb-0">Locked</h3>
          <Badge
            pill
            className="body-copy m-0 text-kalbe-black d-flex justify-content-center align-items-center"
            style={{
              width: "1.75em",
              height: "1.75em",
              backgroundColor: "#EFEFEF",
            }}
          >
            {lockedData && lockedData.length}
          </Badge>
        </div>
        <AchievementItems data={lockedData} isEarned={false} />
      </div>
    </BaseLayout>
  );
};

export default Achievements;
