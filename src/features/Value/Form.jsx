import { useForm } from "@mantine/form";
import { Button, TextInput, Textarea, Stack, Flex, FileInput } from "@mantine/core";
import { modals } from "@mantine/modals";

const FormValue = ({ submitFn, initialValues }) => {
  const form = useForm({ initialValues });

  const handleSubmit = async (values) => {
    await submitFn(values);
    modals.closeAll();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput {...form.getInputProps("name.kk")} label="Kazakh" />
        <TextInput {...form.getInputProps("name.uz")} label="Uzbek" />
        <TextInput {...form.getInputProps("name.ru")} label="Russian" />
        <TextInput {...form.getInputProps("name.en")} label="English" />

        <Textarea {...form.getInputProps("text.kk")} label="Kazakh Text" />
        <Textarea {...form.getInputProps("text.uz")} label="Uzbek Text" />
        <Textarea {...form.getInputProps("text.ru")} label="Russian Text" />
        <Textarea {...form.getInputProps("text.en")} label="English Text" />

        <FileInput
          label="Upload photo"
          placeholder="Pick image"
          accept="image/*"
          value={form.values.photo}
          onChange={(file) => form.setFieldValue("photo", file)}
        />

        <Flex justify="end" gap={10}>
          <Button onClick={() => modals.closeAll()}>Cancel</Button>
          <Button type="submit">Save</Button>
        </Flex>
      </Stack>
    </form>
  );
};

export default FormValue;
