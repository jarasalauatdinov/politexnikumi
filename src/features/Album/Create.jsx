import { api } from "../../api/api";
import FormAlbum from "./Form";

const CreateAlbum = () => {
  async function createFn(body) {
    const formData = new FormData();

    formData.set("title[kk]", body.kk);
    formData.set("title[ru]", body.ru);
    formData.set("title[uz]", body.uz);
    formData.set("title[en]", body.en);

    body.photos.forEach((file) => {
      formData.set("photos", file);
    });

    await api.post("albums/create", formData);
  }

  return <FormAlbum submitFn={createFn} />;
};

export default CreateAlbum;
