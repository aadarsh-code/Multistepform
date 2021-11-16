import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import Errormsg from "../Errormsg";
const SkillsForms = ({ formData, setform, navigation }) => {
  const [error, seterror] = useState(false);
  const { skill1, skill2, skill3, skill4 } = formData;
  const handleNext = () => {
    if (skill1 && skill2 && skill3 && skill4) {
      navigation.next();
      seterror(true);
    } else {
      seterror(true);
    }
  };
  return (
    <>
      <Container maxWidth="xs">
        <Typography variant="h3"> Skills Details</Typography>
        {error && <Errormsg>Please fill all skills field</Errormsg>}
        <TextField
          style={{ marginTop: "20px" }}
          required
          id="outlined-required"
          label="skill 1"
          variant="outlined"
          value={skill1}
          name="skill1"
          fullWidth
          onChange={setform}
        />
        <TextField
          style={{ marginTop: "20px" }}
          required
          id="outlined-required"
          label="skill2"
          variant="outlined"
          value={skill2}
          name="skill2"
          fullWidth
          onChange={setform}
        />
        <TextField
          style={{ marginTop: "20px" }}
          required
          id="outlined-required"
          label="skill3"
          variant="outlined"
          value={skill3}
          name="skill3"
          fullWidth
          onChange={setform}
        />
        <TextField
          style={{ marginTop: "20px" }}
          required
          id="outlined-required"
          label="skill4"
          variant="outlined"
          value={skill4}
          name="skill4"
          fullWidth
          onChange={setform}
        />
        <div style={{ marginTop: "1rem" }}>
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => navigation.previous()}
          >
            Back
          </Button>
        </div>
      </Container>
    </>
  );
};

export default SkillsForms;
