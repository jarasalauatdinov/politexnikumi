import { useEffect, useState } from "react";
import { Button, Flex, Stack, Table, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import { api } from "../../../api/api";
import CreateNews from "../../../features/News/Create";
import UpdateNews from "../../../features/News/Update";
import DeleteNews from "../../../features/News/Delete";

import { ActionIcon } from '@mantine/core';
import { FiTrash2, FiEdit3 } from "react-icons/fi";



function News() {
  const [news, setNews] = useState([]);
  const currentLang = "ru";

  async function getNews() {
    try {
      const { data } = await api.get("/news");
      setNews(data.data.items);
    } catch (error) {
      console.error("Error fetching news:", error)
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  function createFn() {
    modals.open({
      children: (
        <CreateNews
          getNews={getNews}
        />
      )
    })
  }

  function updateFn(id) {
    modals.open({
      children: (
        <UpdateNews
          id={id}
          news={news}
          setNews={setNews}
        />
      )
    })
  }
  function deleteFn(id) {
    modals.open({
      children: (
        <DeleteNews
          id={id}
          news={news}
          setNews={setNews}
        />
      ),
    });
  }

  return (
    <Stack p={20} w="100%">
      <Flex justify="space-between" align="center">
        <Title>News</Title>
        <Button onClick={createFn}>Create</Button>
      </Flex>
      <Table horizontalSpacing="xl" verticalSpacing="sm" highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Id</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Short Content</Table.Th>
            <Table.Th>Content</Table.Th>
            <Table.Th>Author</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {news.map((el) => (
            <Table.Tr key={el.id}>
              <Table.Td>
                <img src={el.cover_image?.path}
                  alt={el.title?.en || "No title"}
                  width={120} height={80}
                  style={{ objectFit: "cover", borderRadius: 6 }}
                />
              </Table.Td>
              <Table.Td>{el.title?.[currentLang]}</Table.Td>
              <Table.Td>{el.short_content?.[currentLang]}</Table.Td>
              <Table.Td>{el.content?.[currentLang]}</Table.Td>
              <Table.Td>{el.author?.full_name?.[currentLang]}</Table.Td>
              <Table.Td>
                <Flex gap={10}>

                  <ActionIcon
                    onClick={() => updateFn(el.id)}
                  >
                    <FiEdit3 size={18} />
                  </ActionIcon>
                  <ActionIcon
                    color="red"
                    onClick={() => deleteFn(el.id)}
                  >
                    <FiTrash2 size={18} />
                  </ActionIcon>
                </Flex>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>

      </Table>
    </Stack>
  );
}


export default News;