import { useForm } from "@mantine/form";
import {
  Button,
  TextInput,
  Textarea,
  Stack,
  Flex,
  FileInput,
  Select,
  MultiSelect,
  Image,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { modals } from "@mantine/modals";
import { useTranslation } from "react-i18next";
import { X } from "tabler-icons-react";

const FormNews = ({ submitFn, initialValues, loading }) => {
  const [authors, setAuthors] = useState([]);
  const [tags, setTags] = useState([]);
  const { t } = useTranslation();

  const form = useForm({
    initialValues,
  });

  useEffect(() => {
    async function fetchAuthors() {
      try {
        const { data } = await api.get("/users");
        setAuthors(
          data.data.items.map((u) => ({
            value: u.id.toString(),
            label: u.full_name?.ru || u.full_name?.en || `User ${u.id}`,
          }))
        );
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    }

    async function fetchTags() {
      try {
        const { data } = await api.get("/tags");
        setTags(
          data.data.items.map((t) => ({
            value: t.id.toString(),
            label: t.name,
          }))
        );
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    }

    fetchAuthors();
    fetchTags();
  }, []);

  // eski rasmni o‘chirish
  const removeOldImage = (id) => {
    form.setFieldValue(
      "old_images",
      form.values.old_images.filter((img) => img.id !== id)
    );
    form.insertListItem("delete_cover_images", id);
  };

  // yangi rasmni o‘chirish
  const removeNewImage = (index) => {
    const newFiles = [...form.values.cover_images];
    newFiles.splice(index, 1);
    form.setFieldValue("cover_images", newFiles);
  };

  const handleSubmit = async (values) => {
    await submitFn({
      ...values,
      author_id: values.author_id ? Number(values.author_id) : null,
      tags: values.tags?.map((t) => Number(t)) || [],
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput label="Title (kk)" {...form.getInputProps("title.kk")} />
        <TextInput label="Title (uz)" {...form.getInputProps("title.uz")} />
        <TextInput label="Title (ru)" {...form.getInputProps("title.ru")} />
        <TextInput label="Title (en)" {...form.getInputProps("title.en")} />

        <Textarea label="Short Content (kk)" {...form.getInputProps("short_content.kk")} />
        <Textarea label="Short Content (uz)" {...form.getInputProps("short_content.uz")} />
        <Textarea label="Short Content (ru)" {...form.getInputProps("short_content.ru")} />
        <Textarea label="Short Content (en)" {...form.getInputProps("short_content.en")} />

        <Textarea label="Content (kk)" {...form.getInputProps("content.kk")} />
        <Textarea label="Content (uz)" {...form.getInputProps("content.uz")} />
        <Textarea label="Content (ru)" {...form.getInputProps("content.ru")} />
        <Textarea label="Content (en)" {...form.getInputProps("content.en")} />

        <Select
          label="Author"
          placeholder="Select author"
          data={authors}
          {...form.getInputProps("author_id")}
        />
        <MultiSelect
          label="Tags"
          placeholder="Select tags"
          data={tags}
          {...form.getInputProps("tags")}
        />

        {form.values.old_images?.length > 0 && (
          <Flex gap={10} wrap="wrap">
            {form.values.old_images.map((img) => (
              <div key={img.id} style={{ position: "relative" }}>
                <Image src={img.url} width={120} radius="md" />
                <button
                  type="button"
                  onClick={() => removeOldImage(img.id)}
                  style={{
                    position: "absolute",
                    top: -5,
                    right: -5,
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    width: 24,
                    height: 24,
                  }}
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </Flex>
        )}

        {form.values.cover_images?.length > 0 && (
          <Flex gap={10} wrap="wrap">
            {form.values.cover_images.map((file, idx) => (
              <div key={idx} style={{ position: "relative" }}>
                <Image
                  src={URL.createObjectURL(file)}
                  width={120}
                  radius="md"
                />
                <button
                  type="button"
                  onClick={() => removeNewImage(idx)}
                  style={{
                    position: "absolute",
                    top: -5,
                    right: -5,
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    width: 24,
                    height: 24,
                  }}
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </Flex>
        )}

        <FileInput
          label="Add New Cover Images"
          accept="image/png,image/jpeg"
          multiple
          value={null}
          onChange={(newFiles) =>
            form.setFieldValue("cover_images", [
              ...(form.values.cover_images || []),
              ...newFiles,
            ])
          }
        />

        <Flex justify="end" gap={10}>
          <Button color="gray" onClick={() => modals.closeAll()}>
            {t("btn.cancel")}
          </Button>
          <Button type="submit" loading={loading}>
            {t("btn.save")}
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};

export default FormNews;
