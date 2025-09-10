import { useEffect, useState } from "react";
import { api } from "../../api/api";
import FormClub from "./Form";

const UpdateValue = ({ id, getValue }) => {
  const [data, setData] = useState();

  async function getValueById() {
    try {
      const { data } = await api.get(`/values/${id}`); // <-- GET ishlatildi
      setData(data.data);
    } catch (error) {
      console.error("Error fetching value:", error);
    }
  }

  useEffect(() => {
    getValueById();
  }, [id]);

  async function updateFn(values) {
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

      if (values.photo) {
        formData.append("photo", values.photo); // agar photo required bo‘lsa, doim yuborish
      }

      await api.put(`/values/update/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      getValue();
      alert("Value updated successfully!");
    } catch (error) {
      console.error("Error updating value:", error.response?.data || error);
      alert("Error updating value. Check all required fields (name/text/photo).");
    }
  }

  return data ? (
    <FormClub
      submitFn={updateFn}
      initialValues={{
        name: { kk: data.name.kk, uz: data.name.uz, ru: data.name.ru, en: data.name.en },
        text: { kk: data.text.kk, uz: data.text.uz, ru: data.text.ru, en: data.text.en },
        photo: null,
      }}
    />
  ) : null;
};

export default UpdateValue;
