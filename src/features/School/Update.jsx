import React, { useEffect, useState } from "react";
import FormSchool from "./Form";
import { api } from "../../api/api"; 
import { modals } from "@mantine/modals";

const UpdateSchool = ({ id, getSchool }) => {
  const [data, setData] = useState();

  async function fetchSchool() {
    try {
      const { data } = await api.get(`/schools/${id}`);
      setData(data.data);
    } catch (error) {
      console.error("Error fetching school:", error);
    }
  }

  useEffect(() => {
    fetchSchool();
  }, [id]);

  async function updateFn(body) {
    try {
      await api.put(`/schools/update/${id}`, body); // ✅ body yuboramiz
      getSchool(); // ✅ jadvalni yangilash
      modals.closeAll(); // ✅ modalni yopish
    } catch (error) {
      console.error("Error updating school:", error);
    }
  }

  return (
    <>
      {data && (
        <FormSchool
          submitFn={updateFn}
          initialValues={{
            name: {
              ru: data.name?.ru || "",
              uz: data.name?.uz || "",
              en: data.name?.en || "",
              kk: data.name?.kk || "",
            },
            description: {
              ru: data.description?.ru || "",
              uz: data.description?.uz || "",
              en: data.description?.en || "",
              kk: data.description?.kk || "",
            },
          }}
        />
      )}
    </>
  );
};

export default UpdateSchool;
