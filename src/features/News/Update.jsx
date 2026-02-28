import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Loader, Flex, Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Check, X } from "tabler-icons-react";
import { modals } from "@mantine/modals";
import FormNews from "./Form";

const UpdateNews = ({ id, getNews }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/news/${id}`);
      setData(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      notifications.show({
        title: "Error",
        message: "Failed to fetch data!",
        color: "red",
        icon: <X />,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const updateFn = async (values) => {
    setLoading(true);
    try {
      const formData = new FormData();

      // multilingual fields
      ["kk", "uz", "ru", "en"].forEach((lang) => {
        formData.append(`title[${lang}]`, values.title[lang]);
        formData.append(`short_content[${lang}]`, values.short_content[lang]);
        formData.append(`content[${lang}]`, values.content[lang]);
      });

      // delete old images
      if (values.delete_cover_images?.length) {
        values.delete_cover_images.forEach((imgId) => {
          formData.append("delete_cover_images[]", imgId);
        });
      }

      // new uploaded images
      if (values.cover_images?.length) {
        values.cover_images.forEach((file) => {
          if (file instanceof File) {
            formData.append("cover_images[]", file);
          }
        });
      }

      formData.append("author_id", values.author_id);
      values.tags.forEach((t) => formData.append("tags[]", t));
      formData.append("_method", "PUT");

      await api.post(`/news/update/${id}`, formData);

      notifications.show({
        title: "Success",
        message: "News updated successfully",
        color: "teal",
        icon: <Check />,
      });

      if (getNews) await getNews();
      modals.closeAll();
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "Something went wrong while updating",
        color: "red",
        icon: <X />,
      });
      console.error("Update error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!data) {
    return (
      <Flex justify="center" align="center" style={{ height: "200px" }}>
        <Loader variant="dots" size="lg" />
      </Flex>
    );
  }

  return (
    <Stack>
      <FormNews
        submitFn={updateFn}
        loading={loading}
        initialValues={{
          title: {
            kk: data?.title?.kk || "",
            uz: data?.title?.uz || "",
            ru: data?.title?.ru || "",
            en: data?.title?.en || "",
          },
          short_content: {
            kk: data?.short_content?.kk || "",
            uz: data?.short_content?.uz || "",
            ru: data?.short_content?.ru || "",
            en: data?.short_content?.en || "",
          },
          content: {
            kk: data?.content?.kk || "",
            uz: data?.content?.uz || "",
            ru: data?.content?.ru || "",
            en: data?.content?.en || "",
          },
          author_id: data?.author?.id?.toString() || null,
          tags: data?.tags?.map((t) => t.id.toString()) || [],
          cover_images: [], // yangi fayllar
          delete_cover_images: [],
          old_images: data?.cover_images?.map((img) => ({
            id: img.id,
            url: img.path, // ✅ path ishlatish kerak!
          })) || [],
        }}
      />
    </Stack>
  );
};

export default UpdateNews;
