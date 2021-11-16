import { Container } from "@material-ui/core";
import React from "react";
import Header from "./Components/Header";
import ResponsiveForm from "./Components/MultiStepForms/ResponsiveForm";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <ResponsiveForm />
    </Container>
  );
};

export default App;
