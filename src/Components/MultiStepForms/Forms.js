import React, { useState } from "react";
import Errormsg from "../Errormsg";
import { Button, Container, TextField, Typography } from "@material-ui/core";
const Forms = ({ formData, setform, navigation }) => {
  const [error, seterror] = useState(false);
  const { username, broname, mothername, fathername } = formData;
  const handleNext = () => {
    if (username && mothername && fathername && broname) {
      navigation.next();
      seterror(false);
    } else seterror(true);
  };
  return (
    <>
      <Container maxWidth="xs">
        <Typography variant="h3"> Personal Details</Typography>
        {error && <Errormsg>Please fill all fields</Errormsg>}
        <TextField
          required
          label="User Name"
          variant="outlined"
          margin="normal"
          value={username}
          onChange={setform}
          name="username"
          fullWidth
        />
        <TextField
          required
          label="Mother Name"
          variant="outlined"
          margin="normal"
          value={mothername}
          name="mothername"
          onChange={setform}
          fullWidth
        />
        <TextField
          required
          label="Father Name"
          variant="outlined"
          margin="normal"
          value={fathername}
          name="fathername"
          onChange={setform}
          fullWidth
        />{" "}
        <TextField
          required
          label="Brother Name"
          variant="outlined"
          margin="normal"
          value={broname}
          name="broname"
          onChange={setform}
          fullWidth
        />{" "}
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Container>
    </>
  );
};

export default Forms;
