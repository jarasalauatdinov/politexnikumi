import { useEffect, useState } from "react";
import { api } from "../../api/api";
import FormAlbum from "./Form";

const UpdateAlbum = ({ id }) => {
  const [album, setAlbum] = useState(null);

  async function getAlbum() {
    try {
      const { data } = await api.get(`albums/${id}`);
      setAlbum(data.data);
    } catch (error) {
      console.error("Error fetching album:", error);
    }
  }

  useEffect(() => {
    getAlbum();
  }, [id]);

  async function updateFn(body) {
    const formData = new FormData();

    formData.set("title[kk]", body.kk);
    formData.set("title[ru]", body.ru);
    formData.set("title[uz]", body.uz);
    formData.set("title[en]", body.en);

    // ❌ set → faqat oxirgi faylni yuboradi
    // ✅ append → barcha fayllar yuboriladi
    if (body.photos) {
      body.photos.forEach((file) => {
        formData.append("photos", file);
      });
    }

    // Laravel usuli uchun
    formData.set("_method", "PUT");

    try {
      await api.post(`albums/update/${id}`, formData);
      getAlbum(); // yangilangan ma'lumotni qayta yuklash
    } catch (error) {
      console.error("Error updating album:", error);
    }
  }

  if (!album) return <p>Loading...</p>;

  return (
    <FormAlbum
      submitFn={updateFn}
      initialValues={{
        ru: album.title?.ru || "",
        en: album.title?.en || "",
        uz: album.title?.uz || "",
        kk: album.title?.kk || "",
        photos: album.photos || [],
      }}
    />
  );
};

export default UpdateAlbum;
