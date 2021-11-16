import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Forms from "./Forms";
import Submit from "./Submit";
import SkillsForms from "./SkillsForm";
import Review from "../Review";
// creating all  forms data in  one place
const defaultData = {
  username: "",
  mothername: "",
  broname: "",
  fathername: "",
  skill1: "",
  skill2: "",
  skill3: "",
  skill4: "",
};
const steps = [
  {
    id: "personal",
  },
  { id: "skills" },

  { id: "review" },
  { id: "submit" },
];

const ResponsiveForm = () => {
  const [formData, setform] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const props = { formData, setform, navigation };
  switch (step.id) {
    case "personal":
      return <Forms {...props} />;
    case "skills":
      return <SkillsForms {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }
  return (
    <div>
      <h1>Responsive form </h1>
    </div>
  );
};

export default ResponsiveForm;
