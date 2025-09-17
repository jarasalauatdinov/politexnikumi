import React, { useEffect, useState } from "react";
import FormEmployee from "./Form";
import { api } from "../../api/api";

const CreateEmployee = () => {
  const [positions, setPositions] = useState([]);

  async function createFn(body) {
    const formData = new FormData();
    formData.append("full_name[kk]", body.full_name.kk);
    formData.append("full_name[uz]", body.full_name.uz);
    formData.append("full_name[ru]", body.full_name.ru);
    formData.append("full_name[en]", body.full_name.en);
    formData.append("phone", body.phone);
    formData.append("email", body.email);
    formData.append("birth_date", body.birth_date);
    formData.append("position_id", body.position_id);

    if (body.photo) {
      formData.append("photo", body.photo);
    }

    await api.post("/employees/create", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  useEffect(() => {
    api.get("/positions").then(({ data }) => {
      setPositions(data.data.items);
    });
  }, []);

  return (
    <div>
      <FormEmployee
        submitFn={createFn}
        initialValues={{
          full_name: { kk: "", uz: "", ru: "", en: "" },
          phone: "",
          email: "",
          photo: null,
          birth_date: "",
          position_id: "",
        }}
        positions={positions}
      />
    </div>
  );
};

export default CreateEmployee;
