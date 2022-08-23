import React from "react";
import { FormRenderer } from "@steera/form-manager";
import { useLocation } from "react-router-dom";

export default function Renderer() {
  const location = useLocation();

  const [submitted, setSubmitted] = React.useState(false);

  const submitButton = React.createRef();

  const onClickButton = (_) => {
    const element = submitButton && submitButton.current;
    if (element) {
      element.click();
    }
    setSubmitted(true);
  };

  const onSubmit = (arg) => {
    const inputItems = {};
    arg.forEach((value, key) => {
      inputItems[key] = value;
    });
    console.log("Form Data", inputItems);
  };

  return (
    <>
      <FormRenderer
        ref={submitButton}
        template={location.state.templateData.template}
        name="myform"
        className="form-renderer"
        onSubmit={onSubmit}
        templateValues={{}}
        submitted={submitted}
      />
      <button onClick={onClickButton}> Submit This Form</button>
    </>
  );
}
