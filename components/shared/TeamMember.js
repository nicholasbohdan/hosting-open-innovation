import React from "react";
import { Card, Button, CardTitle, CardText, CardSubtitle } from "reactstrap";
import styles from "styles/IdeaCatalog.module.css";

const TeamMember = ({ data, state }) => {
  return (
    <div>
      <Card body>
        <CardTitle tag="h5" style={{ fontWeight: "bold" }}>
          Team Member - {data.TeamName}
        </CardTitle>
        {data.TeamMemberName.map((singleData) => {
          return (
            <CardText tag="div" className="mb-2" key={singleData.orang}>
              <img
                className="float-left"
                src={singleData.photo}
                style={{
                  objectFit: "cover",
                  width: "65px",
                  height: "65px",
                  borderRadius: "50%",
                }}
              />
              <CardTitle
                tag="h4"
                className={`${styles.cardTeam} mt-1`}
                style={{ marginLeft: "4.63rem" }}
              >
                {singleData.orang}
              </CardTitle>
              <CardSubtitle
                tag="h6"
                className={`${styles.cardTeam} mb-3 text-muted`}
                style={{ marginLeft: "4.7rem" }}
              >
                {singleData.role}
              </CardSubtitle>
            </CardText>
          );
        })}

        {(state === "NoTeam" && (
          <React.Fragment>
            <Button color="primary" outline color="secondary" block>
              Request to Join Team
            </Button>
            <Button color="success" block>
              Chat Author
            </Button>
          </React.Fragment>
        )) ||
          (state === "TeamVerif" && (
            <React.Fragment>
              <Button color="success" block>
                Submit to Konvensi Inovasi
              </Button>
            </React.Fragment>
          ))}
      </Card>
    </div>
  );
};

export default TeamMember;
