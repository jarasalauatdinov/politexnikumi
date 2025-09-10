import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import { Button, Flex, Stack, Table, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import CreateValue from "../../../features/Value/Create";
import DeleteValue from "../../../features/Value/Delete";
import UpdateValue from "../../../features/Value/Update";

function Value() {
    const [value, setValue] = useState([]);
    const currentLang = "en";

    async function getValue() {
        try {
            const { data } = await api.get("/values");
            setValue(data.data.items);
        } catch (error) {
            console.error("Error fetching value:", error)
        }
    }

    useEffect(() => {
        getValue();
    }, []);

    function createFn() {
        modals.open({
            children: (
                <CreateValue
                    getValue={getValue}
                />
            )
        })
    }

    function deleteFn(id) {
        modals.open({
            children: (
                <DeleteValue
                    id={id}
                    value={value}
                    setValue={setValue}
                />
            )
        })
    }

    function updateFn(id) {
        modals.open({
            children: (
                <UpdateValue
                    id={id}
                    value={value}
                    setValue={setValue}
                />
            )
        })
    }

    return (
        <Stack p={20} w="100%">
            <Flex justify="space-between" align="center">
                <Title>Value</Title>
                <Button onClick={createFn}>Create</Button>
            </Flex>
            <Table horizontalSpacing="xl" verticalSpacing="sm" highlightOnHover withTableBorder withColumnBorders>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Id</Table.Th>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Text</Table.Th>
                        <Table.Th>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {value.map((el) => (
                        <Table.Tr key={el.id}>
                            <Table.Td>{el.id}</Table.Td>
                            <Table.Td>{el.name[currentLang]}</Table.Td>
                            <Table.Td>{el.text[currentLang]}</Table.Td>
                            <Table.Td>
                                <Flex gap={10}>
                                    <Button onClick={() => deleteFn(el.id)}>Delete</Button>
                                    <Button onClick={() => updateFn(el.id)}>Update</Button>
                                </Flex>
                            </Table.Td>
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </Stack>
    );
}


export default Value;