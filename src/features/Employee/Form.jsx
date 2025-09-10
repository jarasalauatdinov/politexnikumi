import { Button, FileInput, Flex, Input, Stack, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { modals } from '@mantine/modals';
import React from 'react'

const FormEmployee = ({ submitFn, initialValues }) => {
    const form = useForm({
        initialValues,
    });

    const handleSubmit = async (values) => {
        await submitFn(values);
        modals.closeAll();
    }

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
                {["kk", "uz", "ru", "en"].map(lang => (
                    <TextInput
                        key={lang}
                        label={`Full Name (${lang})`}
                        placeholder="Введите имя"
                        {...form.getInputProps(`full_name.${lang}`)}
                    />
                ))}

                <TextInput
                    label="Phone"
                    placeholder="Введите телефон"
                    {...form.getInputProps("phone")}
                />

                <FileInput
                    label="Photo"
                    accept="image/png,image/jpeg"
                    value={form.values.photo}
                    onChange={(file) => form.setFieldValue("photo", file)}
                />

                <TextInput
                    label="Email"
                    placeholder="Введите email"
                    {...form.getInputProps("email")}
                />

                {["kk", "uz", "ru", "en"].map(lang => (
                    <React.Fragment key={lang}>
                        <TextInput
                            label={`Position Name (${lang})`}
                            placeholder="Введите название должности"
                            {...form.getInputProps(`position.${lang}.name`)}
                        />
                        <Textarea
                            label={`Position Description (${lang})`}
                            placeholder="Введите описание должности"
                            {...form.getInputProps(`position.${lang}.description`)}
                        />
                    </React.Fragment>
                ))}

                <TextInput
                    label="Birth Date"
                    placeholder="YYYY-MM-DD"
                    {...form.getInputProps("birth_date")}
                />

                <Flex justify="end" gap={10}>
                    <Button onClick={() => modals.closeAll()}>Отмена</Button>
                    <Button type="submit">Сохранить</Button>
                </Flex>
            </Stack>
        </form>
    )
}

export default FormEmployee
