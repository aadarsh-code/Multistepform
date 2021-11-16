import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import { Accordion } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import { ListItemText, IconButton } from "@material-ui/core";

const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    username,
    mothername,
    fathername,
    broname,
    skill1,
    skill2,
    skill3,
    skill4,
  } = formData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch(
      "https://formdata-9d09a-default-rtdb.firebaseio.com/FormData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          mothername,
          fathername,
          broname,
          skill1,
          skill2,
          skill3,
          skill4,
        }),
      }
    );
    go("submit");
    alert("form submit sucessfully");
  };
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h4">Review your Details</Typography>
        <RenderAccordion
          summary="Personal"
          go={go}
          details={[
            { "First Name": username },
            { "Mother Name": mothername },
            { "Father Name": fathername },
            { "Brother Name": broname },
          ]}
        />
        <RenderAccordion
          summary="Skills"
          go={go}
          details={[
            { "Skill 1": skill1 },
            { "Skill 2": skill2 },
            { "Skil 3": skill3 },
            { "skill 4": skill4 },
          ]}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Container>
    </>
  );
};
export const RenderAccordion = ({ summary, details, go }) => {
  return (
    <Accordion>
      <AccordionSummary>{summary}</AccordionSummary>
      <AccordionDetails>
        <div>
          {details.map((data, index) => {
            const objKey = Object.keys(data)[0];
            const objValue = data[Object.keys(data)[0]];
            // console.log(objval);
            return (
              <ListItemText
                key={index}
              >{`${objKey} : ${objValue}`}</ListItemText>
            );
          })}
          <IconButton
            color="primary"
            component="span"
            onClick={() => go(`${summary.toLowerCase()}`)}
          >
            Edit Details
          </IconButton>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Review;
