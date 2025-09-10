import FormClub from "./Form";
import { api } from "../../api/api";

const CreateClub = ({ getClubs }) => {
    const createFn = async (values) => {
        try {
            const formData = new FormData();
            // Name
            formData.append("name[kk]", values.name.kk);
            formData.append("name[uz]", values.name.uz);
            formData.append("name[ru]", values.name.ru);
            formData.append("name[en]", values.name.en);

            // Text
            formData.append("text[kk]", values.text.kk);
            formData.append("text[uz]", values.text.uz);
            formData.append("text[ru]", values.text.ru);
            formData.append("text[en]", values.text.en);

            // Photo
            if (!values.photo) return alert("Photo is required!");
            formData.append("photo", values.photo);

            await api.post("/clubs/create", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            getClubs();
            alert("Club created successfully!");
        } catch (error) {
            console.error("Error creating club:", error);
            alert("Error creating club");
        }
    };

    return <FormClub
        submitFn={createFn}
        initialValues={{
            name: { kk: "", uz: "", ru: "", en: "" },
            text: { kk: "", uz: "", ru: "", en: "" },
            photo: null
        }}
    />;
};

export default CreateClub;
