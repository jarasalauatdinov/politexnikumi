import { useForm } from "@mantine/form";
import { Button, Textarea, Stack, Flex, TextInput } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useTranslation } from "react-i18next";

const FormSchoolHours = ({ submitFn, initialValues, loading }) => {
    const { t } = useTranslation();
    const form = useForm({
        initialValues,
    });

    const handleSubmit = async (values) => {
        await submitFn(values);
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
                <TextInput
                    label="Title (kk)"
                    placeholder="Title"
                    {...form.getInputProps("title.kk")}
                />
                <TextInput
                    label="Title (uz)"
                    placeholder="Title"
                    {...form.getInputProps("title.uz")}
                />
                <TextInput
                    label="Title (ru)"
                    placeholder="Title "
                    {...form.getInputProps("title.ru")}
                />
                <TextInput
                    label="Title (en)"
                    placeholder="Title"
                    {...form.getInputProps("title.en")}
                />

                <Textarea
                    label="Workday (kk)"
                    placeholder="Workday"
                    minRows={2}
                    {...form.getInputProps("workday.kk")}
                />
                <Textarea
                    label="Workday (uz)"
                    placeholder="Workday"
                    minRows={2}
                    {...form.getInputProps("workday.uz")}
                />
                <Textarea
                    label="Workday (ru)"
                    placeholder="Workday"
                    minRows={2}
                    {...form.getInputProps("workday.ru")}
                />
                <Textarea
                    label="Workday (en)"
                    placeholder="Workday"
                    minRows={2}
                    {...form.getInputProps("workday.en")}
                />

         
                <Flex justify="end" gap={10}>
                    <Button color="gray" onClick={() => modals.closeAll()}>{t("btn.cancel")}</Button>
                    <Button type="submit" loading={loading}>{t("btn.save")}</Button>
                </Flex>
            </Stack>
        </form>
    );
};

export default FormSchoolHours;