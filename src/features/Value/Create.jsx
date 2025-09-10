import React from "react";
import { api } from "../../api/api";
import FormValue from "./Form";

const CreateValue = ({ getValue }) => {
  async function createFn(values) {
    try {
      const formData = new FormData();

      formData.append("name[kk]", values.name.kk);
      formData.append("name[uz]", values.name.uz);
      formData.append("name[ru]", values.name.ru);
      formData.append("name[en]", values.name.en);

      formData.append("text[kk]", values.text.kk);
      formData.append("text[uz]", values.text.uz);
      formData.append("text[ru]", values.text.ru);
      formData.append("text[en]", values.text.en);

      if (!values.photo) {
        alert("Photo is required!");
        return;
      }
      formData.append("photo", values.photo);

      await api.post("/values/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      getValue(); 
      alert("Value created successfully!");
    } catch (error) {
      console.error("Error creating value:", error);
      alert("Error creating value");
    }
  }

  return (
    <FormValue
      submitFn={createFn}
      initialValues={{
        name: { kk: "", uz: "", ru: "", en: "" },
        text: { kk: "", uz: "", ru: "", en: "" },
        photo: null,
      }}
    />
  );
};

export default CreateValue;
