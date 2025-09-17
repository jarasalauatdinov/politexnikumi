import { Button, FileInput, Flex, Stack, TextInput, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";

const FormEmployee = ({ submitFn, initialValues, positions }) => {
  const form = useForm({ initialValues });

  const handleSubmit = async (values) => {
    await submitFn(values);
    modals.closeAll();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        {["kk", "uz", "ru", "en"].map((lang) => (
          <TextInput
            key={lang}
            label={`Full Name (${lang})`}
            {...form.getInputProps(`full_name.${lang}`)}
          />
        ))}

        <TextInput label="Phone" {...form.getInputProps("phone")} />
        <TextInput label="Email" {...form.getInputProps("email")} />
        <TextInput label="Birth Date" type="date" {...form.getInputProps("birth_date")} />

        {/* Position ID tanlash */}
        <Select
          label="Lavozim"
          placeholder="Lavozimni tanlang"
          data={positions.map((p) => ({
            value: p.id.toString(),
            label: p.name.uz, // kerak bo‘lsa currentLang qilib yuborasiz
          }))}
          {...form.getInputProps("position_id")}
        />

        <FileInput
          label="Photo"
          accept="image/*"
          value={form.values.photo}
          onChange={(file) => form.setFieldValue("photo", file)}
        />

        <Flex justify="end" gap={10}>
          <Button onClick={() => modals.closeAll()}>Отмена</Button>
          <Button type="submit">Сохранить</Button>
        </Flex>
      </Stack>
    </form>
  );
};

export default FormEmployee;
