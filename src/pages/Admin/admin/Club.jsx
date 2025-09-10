import { useEffect, useState } from "react";
import { Button, Flex, Stack, Table, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import { api } from "../../../api/api";
import CreateClub from "../../../features/Club.jsx/Create";
import UpdateClub from "../../../features/Club.jsx/Update";
import DeleteClub from "../../../features/Club.jsx/Delete";

function Club() {
    const [clubs, setClubs] = useState([]);
    const currentLang = "en";

    async function getClubs() {
        try {
            const { data } = await api.get("/clubs");
            setClubs(data.data.items);
        } catch (error) {
            console.error("Error fetching clubs:", error);
        }
    }

    useEffect(() => {
        getClubs();
    }, []);

    function createFn() {
        modals.open({
            children: <CreateClub getClubs={getClubs} />,
        });
    }

    function updateFn(id) {
        modals.open({
            children: <UpdateClub id={id} getClubs={getClubs} />,
        });
    }

    function deleteFn(id) {
        modals.open({
            children: <DeleteClub id={id} clubs={clubs} setClubs={setClubs} />,
        });
    }

    return (
        <Stack p={20} w="100%">
            <Flex justify="space-between" align="center">
                <Title>Club</Title>
                <Button onClick={createFn}>Create</Button>
            </Flex>

            <Table
                horizontalSpacing="xl"
                verticalSpacing="sm"
                highlightOnHover
                withTableBorder
                withColumnBorders
            >
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Id</Table.Th>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Text</Table.Th>
                        <Table.Th>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {clubs.map((el) => (
                        <Table.Tr key={el.id}>
                            <Table.Td>{el.id}</Table.Td>
                            <Table.Td>{el.name[currentLang]}</Table.Td>
                            <Table.Td>{el.text[currentLang]}</Table.Td>
                            <Table.Td>
                                <Flex gap={10}>
                                    <Button onClick={() => updateFn(el.id)}>Update</Button>
                                    <Button onClick={() => deleteFn(el.id)}>Delete</Button>
                                </Flex>
                            </Table.Td>
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </Stack>
    );
}

export default Club;
