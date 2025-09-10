import React, { useEffect, useState } from 'react'
import { api } from '../../../api/api';
import { modals } from '@mantine/modals';
import UpdateDoc from '../../../features/Document/Update';
import DeleteDoc from '../../../features/Document/Delete';
import { Button, Flex, Stack, Table, Title } from '@mantine/core';

function Document() {
    const [documents, setDocs] = useState([]);
    const currentLang = "qr";

    async function getDocs() {
        try {
            const { data } = await api.get("/documents");
            setDocs(data.data.items);
        } catch (error) {
            console.error("Error fetching documents:", error)
        }

    }

    useEffect(() => {
        getDocs();
    }, []);

    function updateFn() {
        modals.open({
            children: (
                <UpdateDoc
                    id={id}
                    documents={documents}
                    getDocs={getDocs}
                />
            )
        })
    }

    function deleteFn() {
        modals.open({
            children: (
                <DeleteDoc
                    id={id}
                    documents={documents}
                    getDocs={getDocs}
                />
            )
        })
    }


    return (
        <Stack p={20} w="100%">
            <Flex justify={"space-between"} align="center">
                <Title>Documents</Title>
            </Flex>
            <Table horizontalSpacing="xl" verticalSpacing="sm" highlightOnHover withTableBorder withColumnBorders>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Path</Table.Th>
                        <Table.Th>Description</Table.Th>
                        <Table.Th>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {documents.map((el) => (
                        <Table.Tr key={el.id}>
                            <Table.Td>{el.id}</Table.Td>
                            <Table.Td>{el.name}</Table.Td>
                            <Table.Td>{el.description}</Table.Td>
                            <Flex gap={10} justify="center">
                                <Button onClick={() => updateFn(el.id)}>Update</Button>
                                <Button onClick={() => deleteFn(el.id)}>Delete</Button>
                            </Flex>
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </Stack>
    )
}

export default Document