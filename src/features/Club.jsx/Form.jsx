import { useForm } from "@mantine/form";
import { Button, TextInput, Textarea, FileInput, Stack, Flex } from "@mantine/core";
import { modals } from "@mantine/modals";

const FormClub = ({ submitFn, initialValues }) => {
    const form = useForm({
        initialValues,
    });

    const handleSubmit = async (values) => {
        await submitFn(values);
        modals.closeAll();
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
                <TextInput label="Kazakh (kk)" {...form.getInputProps("name.kk")} />
                <TextInput label="Uzbek (uz)" {...form.getInputProps("name.uz")} />
                <TextInput label="Russian (ru)" {...form.getInputProps("name.ru")} />
                <TextInput label="English (en)" {...form.getInputProps("name.en")} />

                <Textarea label="Kazakh (kk)" {...form.getInputProps("text.kk")} />
                <Textarea label="Uzbek (uz)" {...form.getInputProps("text.uz")} />
                <Textarea label="Russian (ru)" {...form.getInputProps("text.ru")} />
                <Textarea label="English (en)" {...form.getInputProps("text.en")} />

                <FileInput
                    label="Upload photo"
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

export default FormClub;
