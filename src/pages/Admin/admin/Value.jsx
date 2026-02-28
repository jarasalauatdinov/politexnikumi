import { useEffect, useState } from "react";
import { Button, Flex, Stack, Table, Title, Loader, Pagination, Image } from "@mantine/core";
import { modals } from "@mantine/modals";
import { api } from "../../../api/api";
import DeleteValue from "../../../features/Value/Delete";
import UpdateValue from "../../../features/Value/Update";
import CreateValue from "../../../features/Value/Create";
import { useTranslation } from "react-i18next";
import { notifications } from "@mantine/notifications";
import i18next from "i18next";


const Value = () => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const { t } = useTranslation();
  const language = i18next.language;


  const getValue = async (page = 1) => {
    setLoading(true);
    try {
      const { data } = await api.get(`/values?page=${page}&per_page=10`);
      setValue(data.data.items);
      setLastPage(data.data.pagination.last_page);
    } catch (error) {
      console.error("Error fetching Value:", error);
      notifications.show({
        title: "Error",
        message: "Failed to fetch value!",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getValue(page);
  }, [page]);

  const createFn = () => {
    modals.open({
      children: <CreateValue getValue={getValue} />,
    });
  };

  const updateFn = (id) => {
    modals.open({
      children: <UpdateValue id={id} getValue={getValue} />,
    });
  };

  const deleteFn = (id) => {
    modals.open({
      children: (
        <DeleteValue
          id={id}
          value={value}
          setValue={setValue}
        />
      ),
    });
  };

  return (
    <Stack p={20} w="100%">
      <Flex justify="space-between" align="center">
        <Title>{t("sidebar.value")}</Title>
        <Button onClick={createFn}>{t("btn.create")}</Button>
      </Flex>

      {loading ? (
        <Flex justify="center" align="center" style={{ height: "200px" }}>
          <Loader variant="dots" />
        </Flex>
      ) : (
        <Table
          style={{
            fontSize: '12px',
            tableLayout: 'auto',
          }}
          highlightOnHover
          withTableBorder
          withColumnBorders
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Id</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Text</Table.Th>
              <Table.Th>Photo</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {value.map((el) => (
              <Table.Tr key={el.id}>
                <Table.Td>{el.id}</Table.Td>
                <Table.Td>{el.name[language]}</Table.Td>
                <Table.Td>{el.text[language]}</Table.Td>
                <Table.Td>
                  <Image
                    src={el.photo?.path}
                    alt={el.photo?.name || "photo"}
                    width={80}
                    height={60}
                    radius="md"
                    fit="cover"
                  />
                </Table.Td>
                <Table.Td>
                  <Flex gap={10}>
                    <Button size="xs" color="red" onClick={() => deleteFn(el.id)}>{t("btn.delete")}</Button>
                    <Button size="xs" onClick={() => updateFn(el.id)}>{t("btn.update")}</Button>
                  </Flex>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      )}
      <Flex justify="center" mt="md">
        <Pagination total={lastPage} value={page} onChange={setPage} />
      </Flex>
    </Stack>
  )
}

export default Value