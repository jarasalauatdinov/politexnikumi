import React, { useEffect, useState } from 'react'
import { api } from '../../../api/api';
import { Stack, Title } from '@mantine/core';

 function Faqs() {
    const[faqs, setFaqs] = useState([]);

    async function getFaqs() {
        try {
            const { data } = await api.get("/faqs")
            if (data.data.items) {
                setFaqs(data.data.items)
            } else{
                setFaqs([data.data]);
            }
        } catch (error) {
            console.error("Error fetching faqs:", error);
        }
    }

    useEffect(() => {
        getFaqs();
    }, []);

  return (
    <Stack p={20} w="100%">
        <Title>FAQ</Title>

        <Table horizontalSpacing="xl" verticalSpacing="sm" highlightOnHOver withTableBorder withColumnBorders>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Items</Table.Th>
                </Table.Tr>
            </Table.Thead>

        </Table>

    </Stack>
  )
}

export default Faqs