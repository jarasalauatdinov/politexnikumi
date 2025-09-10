import { useEffect, useState } from "react";
import { api } from "../../api/api";
import FormClub from "./Form";

const UpdateClub = ({ id, getClubs }) => {
    const [data, setData] = useState(null);

    const getClubById = async () => {
        try {
            const { data } = await api.get(`/clubs/${id}`);
            setData(data.data);
        } catch (error) {
            console.error("Error fetching club:", error);
        }
    };

    useEffect(() => {
        getClubById();
    }, [id]);

    const updateFn = async (values) => {
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

            if (values.photo) formData.append("photo", values.photo);

            await api.post(`/clubs/update/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            getClubs();
            alert("Club updated successfully!");
        } catch (error) {
            console.error("Error updating club:", error);
            alert("Error updating club. Make sure all required fields are filled.");
        }
    };

    return data ? <FormClub submitFn={updateFn} initialValues={{ name: data.name, text: data.text, photo: null }} /> : null;
};

export default UpdateClub;
