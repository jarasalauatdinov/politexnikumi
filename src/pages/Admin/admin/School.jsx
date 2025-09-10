import { modals } from '@mantine/modals';
import React, { useEffect, useState } from 'react'
import { api } from '../../../api/api';
import UpdateSchool from '../../../features/School/Update';
import { Button, Flex, Stack, Table, Title } from '@mantine/core';

function School() {
    const [school, setSchool] = useState([]);

    async function getSchool() {
        try {
            const { data } = await api.get(`/schools/1`);
            if (data.data.items) {
              setSchool(data.data.items);
            } else {
              setSchool([data.data]);
            }
          } catch (error) {
            console.error("Error fetching school", error);
            setSchool([]); 
          }
    }

    useEffect(() => {
        getSchool();
    }, []);

    function updateFn(id) {
        modals.open({
            children: (
                <UpdateSchool
                    id={id}
                    getSchool={getSchool}
                />
            )
        })
    }

    return (
        <Stack p={20} w="100%">
            <Title>School</Title>

            <Table horizontalSpacing="xl" verticalSpacing="sm" highlightOnHover withTableBorder withColumnBorders>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Description</Table.Th>
                        <Table.Th>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {school.map((el) => (
                        <Table.Tr key={el.id}>
                            <Table.Td>{el.name.ru}</Table.Td>
                            <Table.Td>{el.description.ru}</Table.Td>
                            <Table.Td>
                                <Flex gap={10}>
                                    <Button onClick={() => updateFn(el.id)}>Update</Button>
                                </Flex>
                            </Table.Td>
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </Stack>

    )

}


export default School