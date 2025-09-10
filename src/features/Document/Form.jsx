import { Button, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import React, { useState } from 'react'

const FormDoc = ({ submitFn, initialValues }) => {
    const [value, setValue] = useState(null);

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
                <TextInput
                    label="Qaraqalpaq (kk)"
                    placeholder='Add Name'
                    {...form.getInputProps("name.kk")}
                />
                <TextInput
                    label="Uzbek (uz)"
                    placeholder='Add Name'
                    {...form.getInputProps("name.uz")}
                />
                <TextInput
                    label="Russian (ru)"
                    placeholder='Add Name'
                    {...form.getInputProps("name.ru")}
                />
                <TextInput
                    label="English (en)"
                    placeholder='Add Name'
                    {...form.getInputProps("name.en")}
                />

                <FileInput
                    label="Cover Image"
                    accept="image/png,image/jpeg"
                    value={value} onChange={setValue}
                    {...form.getInputProps("cover_image")}
                />

                <Flex justify="end" gap={10}>
                    <Button onClick={() => modals.closeAll()}>Close</Button>
                    <Button type="submit">Save</Button>
                </Flex>
            </Stack>
        </form>
    )
}

export default FormDoc