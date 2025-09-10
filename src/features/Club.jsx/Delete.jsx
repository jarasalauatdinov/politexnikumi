import { Stack, Button, Flex, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { api } from "../../api/api";

const DeleteClub = ({ id, clubs, setClubs }) => {
    const deleteFn = async () => {
        try {
            await api.delete(`/clubs/delete/${id}`);
            setClubs(clubs.filter((c) => c.id !== id));
            modals.closeAll();
            alert("Club deleted successfully!");
        } catch (error) {
            console.error("Error deleting club:", error);
            alert("Error deleting club");
        }
    };

    return (
        <Stack>
            <Text>Are you sure you want to delete this club?</Text>
            <Flex gap={10} justify="flex-end">
                <Button onClick={() => modals.closeAll()}>Cancel</Button>
                <Button color="red" onClick={deleteFn}>Delete</Button>
            </Flex>
        </Stack>
    );
};

export default DeleteClub;
