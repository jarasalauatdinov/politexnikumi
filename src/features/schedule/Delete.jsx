import { useState } from "react";
import { Button, Flex, Stack, Text, Loader } from "@mantine/core";
import { modals } from "@mantine/modals";
import { api } from "../../api/api";
import { notifications } from "@mantine/notifications";
import { Check, X } from "tabler-icons-react";
import { useTranslation } from "react-i18next";

const DeleteSchedule = ({ id, AdminSchedule, setAdminSchedule, getAdminSchedule }) => {
    const [loading, setLoading] = useState(false);
      const { t } = useTranslation();
    

    const deleteFn = async () => {
        setLoading(true);
        try {
            await api.delete(`/schedules/delete/${id}`);

            if (getAdminSchedule) await getAdminSchedule();
            else setAdminSchedule(AdminSchedule.filter((u) => u.id !== id));

            modals.closeAll();

            notifications.show({
                title: "Success",
                message: "Position deleted successfully!",
                color: "teal",
                icon: <Check />,
            });
        } catch (error) {
            console.error("Error deleting position:", error);

            notifications.show({
                title: "Error",
                message: "Failed to delete position!",
                color: "red",
                icon: <X />,
            });
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <Flex justify="center" align="center" style={{ height: "150px" }}>
                <Loader variant="dots" />
            </Flex>
        );
    }

    return (
        <Stack>
            <Text>Are you sure you want to delete this position?</Text>
            <Flex gap={10} justify="flex-end">
                <Button onClick={() => modals.closeAll()}>{t("btn.cancel")}</Button>
                <Button color="red" onClick={deleteFn}>
                    {t("btn.delete")}
                </Button>
            </Flex>
        </Stack>
    );
};

export default DeleteSchedule;