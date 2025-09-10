import { useForm } from '@mantine/form'
import { Button, Flex, Stack, Textarea } from '@mantine/core';
import { modals } from '@mantine/modals';


const FormSchool = ({ submitFn, initialValues }) => {
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
                <Textarea
                    label="Name (kk)"
                    placeholder='Введите название'
                    {...form.getInputProps("name.kk")}
                />

                <Textarea
                    label="Name (ru)"
                    placeholder='Введите название'
                    {...form.getInputProps("name.ru")}
                />

                <Textarea
                    label="Name (en)"
                    placeholder='Введите название'
                    {...form.getInputProps("name.en")}
                />

                <Textarea
                    label="Name (uz)"
                    placeholder='Введите название'
                    {...form.getInputProps("name.uz")}
                />

                <Textarea
                    label="History (kk)"
                    placeholder='Введите название'
                    {...form.getInputProps("name.kk")}
                />

                <Textarea
                    label="History (ru)"
                    placeholder='Введите название'
                    {...form.getInputProps("name.ru")}
                />

                <Textarea
                    label="History (en)"
                    placeholder='Введите название'
                    {...form.getInputProps("name.en")}
                />

                <Textarea
                    label="History (uz)"
                    placeholder='Введите название'
                    {...form.getInputProps("name.uz")}
                />

                <Textarea
                    label="Phone"
                    placeholder='Введите название'
                    {...form.getInputProps("phone")}
                />

                <Textarea
                    label="Location"
                    placeholder='Введите название'
                    {...form.getInputProps("locataion")}
                />

                <Textarea
                    label="Description (kk)"
                    placeholder='Введите название'
                    {...form.getInputProps("description.kk")}
                />

                <Textarea
                    label="Description (ru)"
                    placeholder='Введите название'
                    {...form.getInputProps("description.ru")}
                />

                <Textarea
                    label="Description (en)"
                    placeholder='Введите название'
                    {...form.getInputProps("description.en")}
                />

                <Textarea
                    label="Description (uz)"
                    placeholder='Введите название'
                    {...form.getInputProps("description.uz")}
                />

                <Flex justify={end} gap={10}>
                    <Button onClick={() => modals.closeAll()}>Bikarlaw</Button>
                    <Button type='submit'>Saqlaw</Button>
                </Flex>
            </Stack>
        </form>
    )
};

export default FormSchool;