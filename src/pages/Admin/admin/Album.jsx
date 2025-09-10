import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import { Button, Flex, Group, Stack, Table, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import CreateAlbum from "../../../features/Album/Create";
import UpdateAlbum from "../../../features/Album/Update";

const Album = () => {
  const [albums, setAlbums] = useState([]);

  async function getAlbums() {
    try {
      const { data } = await api.get("/albums");
      setAlbums(data.data.items);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  }

  useEffect(() => {
    getAlbums();
  }, []);

  async function createFn() {
    modals.open({
      title: "Create",
      children: <CreateAlbum getAlbums={getAlbums} />,
    });
  }

  async function updateFn(id) {
    modals.open({
      title: "Update",
      children: <UpdateAlbum id={id} getAlbums={getAlbums} />,
    });
  }

  async function deleteFn(id) {
    try {
      await api.delete(`/albums/delete/${id}`);
      getAlbums(); 
    } catch (error) {
      console.error("Error deleting album:", error);
    }
  }

  return (
    <Stack p={20}>
      <Flex justify="space-between" align="center">
        <Title>Album</Title>
        <Button onClick={createFn}>Create</Button>
      </Flex>

      <Table striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Title</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {albums.map((album) => (
            <Table.Tr key={album.id}>
              <Table.Td>{album.title.ru}</Table.Td>
              <Table.Td>{album.description.ru}</Table.Td>
              <Table.Td>
                <Group>
                  <Button
                    variant="outline"
                    color="red"
                    onClick={() => deleteFn(album.id)}
                  >
                    Delete
                  </Button>
                  <Button onClick={() => updateFn(album.id)}>Update</Button>
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  );
};

export default Album;
