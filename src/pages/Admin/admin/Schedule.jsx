import {  useEffect, useState } from "react";
import { Button, Flex, Stack, Table, Title, Loader, Pagination } from "@mantine/core";
import { modals } from "@mantine/modals";
import { api } from "../../../api/api";
import { useTranslation } from "react-i18next";
import CreateSchedule from "../../../features/schedule/Create";
import DeleteSchedule from "../../../features/schedule/Delete";
import UpdateSchedule from "../../../features/schedule/Update";
import i18next from "i18next";


const Schedule = () => {
    const [Schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(false);
    const [downloadingId, setDownloadingId] = useState(null);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const { t } = useTranslation();
    const language = i18next.language
  
    const getAdminSchedule = async (page = 1) => {
      setLoading(true);
      try {
        const { data } = await api.get(`/schedules?page=${page}&per_page=10`);
        setSchedule(data.data.items);
        setLastPage(data.data.pagination.last_page);
      } catch (error) {
        console.error("Error fetching Schedule:", error);
        notifications.show({
          title: "Error",
          message: "Failed to fetch schedule!",
          color: "red",
        });
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getAdminSchedule(page);
    }, [page]);
  
    const handleDownload = async (id, fileName) => {
      setDownloadingId(id);
      try {
        const response = await api.get(`/schedules/download/${id}`, {
          responseType: "blob",
        });
  
        const blob = new Blob([response.data]);
        const url = window.URL.createObjectURL(blob);
  
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName || "document.pdf");
        document.body.appendChild(link);
        link.click();
        link.remove();
  
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Download failed:", error);
        console.error("Backend response:", error.response?.data);
      } finally {
        setDownloadingId(null);
      }
    };
  
    const createFn = () => {
      modals.open({
        children: <CreateSchedule getAdminSchedule={getAdminSchedule} />,
      });
    };
  
    const updateFn = (id) => {
      modals.open({
        children: <UpdateSchedule id={id} getAdminSchedule={getAdminSchedule} />,
      });
    };
  
    const deleteFn = (id) => {
      modals.open({
        children: (
          <DeleteSchedule
            id={id}
            AdminSchedule={Schedule}
            setAdminSchedule={setSchedule}
          />
        ),
      });
    };
  
    return (
      <Stack p={20} w="100%">
        <Flex justify="space-between" align="center">
          <Title>{t("sidebar.schedule")}</Title>
          <Button onClick={createFn}>{t("btn.create")}</Button>
        </Flex>
  
        {loading ? (
          <Flex justify="center" align="center" style={{ height: "200px" }}>
            <Loader variant="dots" />
          </Flex>
        ) : (
          <Table
            style={{
              fontSize: "12px",
              tableLayout: "auto",
            }}
            highlightOnHover
            withTableBorder
            withColumnBorders
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Id</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Download</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {Schedule.map((el) => (
                <Table.Tr key={el.id}>
                  <Table.Td>{el.id}</Table.Td>
                  <Table.Td>{el.description}</Table.Td>
                  <Table.Td>
                    <Button
                      size="xs"
                      w={100}
                      variant="outline"
                      onClick={() => handleDownload(el.id, el.name || `schedule_${el.id}.pdf`)}
                    >
                      {downloadingId === el.id ? <Flex p={18}><Loader size="xs" /></Flex> : t("btn.download")}
                    </Button>
                  </Table.Td>
                  <Table.Td>
                    <Flex gap={10}>
                      <Button
                        size="xs"
                        color="red"
                        onClick={() => deleteFn(el.id)}
                      >
                        {t("btn.delete")}
                      </Button>
                      <Button size="xs" onClick={() => updateFn(el.id)}>
                        {t("btn.update")}
                      </Button>
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
    );
}

export default Schedule;