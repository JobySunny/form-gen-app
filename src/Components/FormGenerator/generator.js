import React from "react";
import { FormGenerator } from "@steera/form-manager";
import { useNavigate } from "react-router-dom";

export default function Generator() {
  const navigate = useNavigate();
  const onExport = (arg) => {
    navigate("/RenderForm", { state: { templateData: arg } });
    console.log("FormData", arg);
  };

  return (
    <>
      <FormGenerator name="myform" onExport={onExport} />
    </>
  );
}
