import { Button, Stack, Text, Flex } from "@mantine/core";
import { modals } from "@mantine/modals";
import React from 'react'

const DeleteValue = ({id, value, setValue}) => {
  const deleteFn = async () => {
    try {
        await api.delete(`/values/delete/${id}`);
        setValue(value.filter((u) => u.id !== id));
        alert("Succesfully deleted");
        modals.closeAll();
    } catch (error) {
        console.error("Error deleting value:", error);
        alert("Error deleting value");
    }
};

return (
    <Stack>
        <Text>Вы действительно хотите удалить?</Text>
        <Flex gap={10} justify="flex-end">
            <Button onClick={() => modals.closeAll()}>Отмена</Button>
            <Button onClick={deleteFn}>Удалить</Button>
        </Flex>
    </Stack>
);
}

export default DeleteValue