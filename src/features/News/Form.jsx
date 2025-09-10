import { useForm } from "@mantine/form";
import { Button, TextInput, Stack, Flex, FileInput, Textarea } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useState } from "react";

const FormNews = ({ submitFn, initialValues }) => {
    const [value, setValue] = useState(null);

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
                <TextInput
                    label="Kazakh (kk)"
                    placeholder="Add Title"
                    {...form.getInputProps("title.kk")}
                />
                <TextInput
                    label="Uzbek (uz)"
                    placeholder="Add Title"
                    {...form.getInputProps("title.uz")}
                />
                <TextInput
                    label="Russian (ru)"
                    placeholder="Add Title"
                    {...form.getInputProps("title.ru")}
                />
                <TextInput
                    label="English (en)"
                    placeholder="Add Title"
                    {...form.getInputProps("title.en")}
                />
                <Textarea
                    label="Kazakh (kk)"
                    placeholder="Add short content"
                    {...form.getInputProps("short_content.kk")}
                />
                <Textarea
                    label="Uzbek (uz)"
                    placeholder="Add short_content"
                    {...form.getInputProps("short_content.uz")}
                />
                <Textarea
                    label="Russian (ru)"
                    placeholder="Add short_content"
                    {...form.getInputProps("short_content.ru")}
                />
                <Textarea
                    label="English (en)"
                    placeholder="Add short_content"
                    {...form.getInputProps("short_content.en")}
                />
                <Textarea
                    label="Kazakh (kk)"
                    placeholder="Add content"
                    {...form.getInputProps("content.kk")}
                />
                <Textarea
                    label="Uzbek (uz)"
                    placeholder="Add content"
                    {...form.getInputProps("content.uz")}
                />
                <Textarea
                    label="Russian (ru)"
                    placeholder="Add content"
                    {...form.getInputProps("content.ru")}
                />
                <Textarea
                    label="English (en)"
                    placeholder="Add content"
                    {...form.getInputProps("content.en")}
                />
     

                <Flex justify="end" gap={10}>
                    <Button onClick={() => modals.closeAll()}>Отмена</Button>
                    <Button type="submit">Сохранить</Button>
                </Flex>
            </Stack>
        </form>
    );
};

export default FormNews;
