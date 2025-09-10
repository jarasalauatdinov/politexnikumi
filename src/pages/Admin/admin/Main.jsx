import React, { useEffect, useState } from 'react'
import { api } from '../../../api/api';
import { Stack, Table, Title } from '@mantine/core';

function Main() {
    const [main, setMain] = useState([]);

    async function getMain() {
        try{
            const {data} = await api.get("/main")
            if (data.data.items) {
                setMain(data.data.items)
            } else {
                setMain([data.data])
            } 
        } catch (error) {
            console.error("Error fetching main:", error);
            setMain([])
        }
    }
   
    useEffect(() => {
        getMain();
    }, []);

    return (
        <Stack p={20} w="100%">
            <Title>Main</Title>

            <Table horizontalSpacing="xl" verticalSpacing="sm" highlightOnHover withTableBorder withColumnBorders>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th></Table.Th>
                        <Table.Th></Table.Th>
                        <Table.Th></Table.Th>
                    </Table.Tr>
                </Table.Thead>
            </Table>
        </Stack>
    )
}

export default Main