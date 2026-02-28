import { Button, FileInput, Flex, Stack, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { modals } from '@mantine/modals';
import React from 'react'
import { useTranslation } from 'react-i18next';

const FormUsers = ({ submitFn, initialValues }) => {
    const { t } = useTranslation();

    const form = useForm({
        initialValues,
    });

    const handleSubmit = async (values) => {
        await submitFn(values);
    }
    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
                <TextInput
                    label="Kazakh (kk)"
                    placeholder="name"
                    {...form.getInputProps("full_name.kk")}
                />
                <TextInput
                    label="Uzbek (uz)"
                    placeholder="name"
                    {...form.getInputProps("full_name.uz")}
                />
                <TextInput
                    label="Russian (ru)"
                    placeholder="name"
                    {...form.getInputProps("full_name.ru")}
                />
                <TextInput
                    label="English (en)"
                    placeholder="name"
                    {...form.getInputProps("full_name.en")}
                />
                <Textarea
                    label="Birth Date"
                    placeholder="Birth Date"
                    {...form.getInputProps("birth_date")}
                />
                <TextInput
                    label="username"
                    placeholder="username"
                    {...form.getInputProps("username")}
                />
                <TextInput
                    label="password"
                    placeholder="password"
                    {...form.getInputProps("password")}
                />
                <Textarea
                    label="Phone"
                    placeholder="Phone"
                    {...form.getInputProps("phone")}
                />
                <Flex justify="end" gap={10}>
                    <Button color="gray" onClick={() => modals.closeAll()}>{t("btn.cancel")}</Button>
                    <Button type="submit">{t("btn.save")}</Button>
                </Flex>
            </Stack>
        </form>
    )
}

export default FormUsers